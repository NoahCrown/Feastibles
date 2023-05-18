import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' id='about-us'>
        <div className='about-us'>
            <h3 className='company-name'>Feastibles</h3>
            
            <p className='copyright'>©2023 Feastibles · Made with  by Boah.</p>
        </div>

        <div className='socials'>
            <p className='follow-us'>Follow us</p>
            <div className='social-icons'>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>  
            </div>
        </div>

        <div className='products'>
            <h3>Products</h3>
            <div className='product-list'>
                <p>Cake</p>
                <p>Cookies</p>
                <p>Pies</p>
                <p>Muffins</p>
            </div>
            

        </div>

    </footer>
  )
}

export default Footer
