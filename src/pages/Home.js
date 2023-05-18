import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
        <ToastContainer/>
    </div>
  )
}

export default Home
