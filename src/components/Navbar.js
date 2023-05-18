import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../ContextProvider'

const Navbar = () => {
  const {cart, authUser , userSignOut} = useContext(MyContext)
  return (
    <header className='nav-header'>
        <nav className='nav'>
            <ul className='nav-links'>
                <li className='nav-items'>
                  <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-items'>
                  <Link className='nav-link' to='/products'>Products</Link>
                </li>
                
            </ul>
            
            <Link to='/'><h1>Feastibles</h1></Link>

            

            <ul className='nav-links'>
              <li className='nav-items'>
                 <Link className='nav-lin' to='/cart'><i class="fa-solid fa-bag-shopping"></i> ( {cart.length} ) </Link>
              </li>
              <li className='nav-items'>
                <Link  className='nav-lin' to='/login'><i onClick={authUser ? userSignOut : null} class={authUser ? "fa-solid fa-right-from-bracket" : "fa-solid fa-user" }></i> </Link>



              </li>

            </ul>
        </nav>
    </header>
  )
}

export default Navbar
