import {React, useContext} from 'react'
import {Link} from 'react-router-dom'
import { MyContext } from '../ContextProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
  const {handleAddToCart, menuItems} = useContext(MyContext)


  return (
    <div className='products-section'>
        <h1 className='title'>"Satisfy your cravings with every bite: Indulge in our delectable delights!"</h1>
        <div className='menu-items'>
        {menuItems.map(val =>  {
          return (
            
              <div className='product-container'>
              
                <img src={val.src} alt='product-img'/>
                <h2>{val.name}</h2>
                <p> ₱ {val.price}</p>
                <div className='product-buttons'>
                  <Link to={`/products/${val.id}`} key={val.id}>
                  <button className='view-button'><i class="fa-solid fa-eye"></i> View Product</button>
                  </Link>
                  <button className='add-to-cart' onClick={() => handleAddToCart(val)}><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>


                </div>
            </div>
          
          )
        })}
        <ToastContainer />

        </div>
        


        <h1 className='title'>"Get your cravings right!"</h1>

    </div>
  )
}

export default AllProducts
