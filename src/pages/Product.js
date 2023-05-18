import {React, useContext} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MyContext } from '../ContextProvider'
import { ToastContainer } from 'react-toastify'


const Product = ({product}) => {

    const { quantity, handleQuantityChange, handleAddToCart} = useContext(MyContext)

  return (
    <>
    <Navbar/>
    <div className='product-page'>
        <div>
            <img src={product.src} alt={product.name}/>
        </div>
        <div className='product-details'>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <p><span>Ingredients: </span>{product.ingredients}</p>
                <p>₱ {product.price}</p>
            <form className='quantity'>
                <input min='1' type='number' value={quantity} onChange={handleQuantityChange}/>
                <button type='button' onClick={() => handleAddToCart(product)}> <i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
            </form>
        </div>
    </div>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default Product