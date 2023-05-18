import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AllProducts from '../components/AllProducts'

const Products = () => {
  return (
    <section className='all-products'>
        <Navbar/>
        <AllProducts/>
        <Footer/>

    </section>
  )
}

export default Products
