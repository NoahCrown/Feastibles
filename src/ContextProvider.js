import React, { createContext, useState, useEffect } from 'react';
import allProducts from './assets/allProducts';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import auth from './firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// Create a new context
const MyContext = createContext();


const MyContextProvider = ({ children }) => {

    const [menuItems, setMenuITems] = useState(allProducts)
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (product) => {
        toast.success("Successfully added to your cart.")
        const existingProductIndex = cart.findIndex(
            (p) => p.id === product.id
          );
          if (existingProductIndex !== -1) {
            const updatedCart = cart.map((p, i) =>
              i === existingProductIndex
                ? { ...p, quantity: p.quantity + quantity }
                : p
            );
            setCart(updatedCart);
          } else {
            setCart([...cart, { ...product, quantity: quantity }]);
          }    

          setQuantity(1)
    };

  function handleRemoveFromCart(product) {
      toast.success("Successfully removed item from cart")
      const existingProductIndex = cart.findIndex((p) => p.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart.splice(existingProductIndex, 1);
        setCart(updatedCart);
      }
    }

  function calculateTotalPrice() {
        return cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value))
  }

  // Authentication Context 
  const [authUser, setAuthUser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user){
        setAuthUser(user)
      }else{
        setAuthUser(null)
      }
    })

  }, [])

  const userSignOut = () => {
    toast.success('Signout successfully')
    signOut(auth).then(() => {
      setAuthUser(null)
    }).catch(error => console.log(error))

    setFormData({name: '',
    address: '',
    phoneNumber: '',})
  }


  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });

    const [orders, setOrders] = useState([])

    const [revenue, setRevenue] = useState(0)

    const handleCheckout = () => {
      if (formData.name === "" || formData.address === ""){
        toast.error("Please login before checking out")
      }else{
        toast.success("Order successful! We'll notify you with any updates")
        const order = { user: formData, order: cart };
      console.log(order);
      setOrders(prevOrders => [...prevOrders, order]);
      setRevenue(prevRevenue => prevRevenue + calculateTotalPrice());
      setCart([]);
      console.log(orders);

      }

      
    };

    useEffect(() => {
      const storedRevenue = localStorage.getItem('revenue');
      if (storedRevenue) {
        setRevenue(parseFloat(storedRevenue));
      }
  
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        setOrders(JSON.parse(storedOrders));
      }

      const formData = localStorage.getItem('formData')
      if (formData){
        setFormData(JSON.parse(formData))
      }

      const menuItems = localStorage.getItem('menuItems')
      if(menuItems){
        setMenuITems(JSON.parse(menuItems))
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem('revenue', revenue.toString());
      localStorage.setItem('formData', JSON.stringify(formData) )
      localStorage.setItem('menuItems', JSON.stringify(menuItems) )
      



    }, [orders, revenue, formData, menuItems]);

    



  return (
    // Provide the context to child components
    <MyContext.Provider value={{ 
      cart, 
    setCart, 
    handleAddToCart, 
    calculateTotalPrice, 
    handleRemoveFromCart, 
    menuItems,
    quantity,
    handleQuantityChange,
    authUser,
    userSignOut,
    formData, setFormData,
    orders, setOrders,
    revenue,setRevenue,
    handleCheckout
  
  }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };