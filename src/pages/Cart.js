import React, { useContext } from 'react';
import { MyContext } from '../ContextProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Cart = () => {
  const {
    cart,
    calculateTotalPrice,
    handleRemoveFromCart,
    formData,
 
    handleCheckout

  } = useContext(MyContext);

 


  


  return (
    <>
      <Navbar />
      <div>
        <div className='information'>
          <p>{formData.name}</p>
          <p>{formData.address}</p>
          <p>{formData.phoneNumber}</p>
          <form>
            <label>
              <input type='radio' name='color' value='cod' /> Cash On Delivery
            </label>
            <label>
              <input type='radio' name='color' value='cod' /> Pickup
            </label>
          </form>
        </div>

        {cart.length === 0 ? (
          <div className='empty-cart'>
            <img alt='sad-cat' src='https://i.imgur.com/1YZfLbz.png'/>
            <p>You have nothing here...</p>

          </div>
        ) : (
          <div className='cart-section'>
          <img alt='happy-cat' className='happy-cat' src='https://i.imgur.com/OrY4IdC.png'/>
            <div className='cart-item'>
              <table>
                <thead>
                  <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    <th>Product Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((val) => {
                    return (
                      <tr>
                        <td>
                          <img src={val.src} alt={val.name} />
                        </td>
                        <td>{val.name}</td>
                        <td>₱ {val.price}</td>
                        <td>{val.quantity}</td>
                        <td>₱ {val.price * val.quantity}</td>
                        <td>
                          <i
                            className='remove fa-solid fa-trash'
                            onClick={() => handleRemoveFromCart(val)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colSpan='3'></td>
                    <td>Total price:</td>
                    <td colSpan='1'> ₱ {calculateTotalPrice()}</td>
                    <td>
                      <button onClick={handleCheckout} className='check-out'><i class="fa-solid fa-money-bill"></i>Checkout</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='total'>
              <div></div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer/>
      <Footer />
    </>
  );
};

export default Cart;
