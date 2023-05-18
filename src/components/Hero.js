import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-section'>        
        <div className='hero-text'>
            <p>Here at Feastibles</p>
            <h1>Indulge in our heavenly pastry.</h1>
            <p className='hero-desc'>Experience the joy of freshly baked treats made with the finest ingredients</p>
            <p className='hero-desc'>From flaky croissants to decadent cakes, our pastry chefs use only the highest quality ingredients to create a heavenly experience for your taste buds.</p>
            <Link to='/products'><i class="fa-solid fa-utensils"></i>View our menu</Link>
        </div>
        <div className='company-desc'>
          
          <img 
          src='https://plus.unsplash.com/premium_photo-1666174851524-543bc4f3a13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='cooking'
          />
          <div className='company-desc-text'>
            <h2>Prepared with love and care.</h2>
            <p> it's a promise. Every day, our expert bakers use only the finest ingredients 
            and time-tested recipes to create delicious treats that are made with the utmost
             care and attention. From the first step to the last, we pour our hearts and 
             souls into every pastry, ensuring that each one is not only beautiful and 
             delicious but also a reflection of our passion for baking. Whether you're 
             stopping in for a quick treat or ordering a custom cake for a special occasion,
              you can always trust that our pastries are prepared with love and care."</p>
          </div>

        </div>
        <div className='company-desc'>
          <div className='company-desc-text'>
            <h2>Satisfy Your Sweet Tooth: Indulge in our Delicious Pastries.</h2>
            <p>Indulge in our delicious pastries and satisfy your sweet tooth! 
            From classic croissants to rich chocolate cakes and delicate macarons, 
            our expert bakers use only the finest ingredients to bring you the best 
            possible experience. Come on in and treat yourself today!</p>
          </div>
          <img src='https://images.unsplash.com/photo-1498602679121-1adc04bd257f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1199&q=80'
            alt='sweets'
          />
        </div>
        <div className='company-desc'>
          <div className='company-desc-text'>
          <h1>Sweet Temptations: A Haven for Pastry Lovers</h1>
          <p>Welcome to "Sweet Temptations," a haven for pastry lovers! 
          Indulge in our delectable treats made with the finest ingredients. 
          From classic croissants to decadent chocolate truffles, there's
           something for everyone. Visit us today and satisfy your sweet tooth!</p>

          </div>
        </div>
        
      
    </div>
  )
}

export default Hero
