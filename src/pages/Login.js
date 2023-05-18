import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link, useNavigate} from 'react-router-dom'
import auth  from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const login = async (e) => {
        e.preventDefault();
        try {
          const userCredentials = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredentials);
          toast.success("Logged in successfully")
          navigate('/userinfo')
        } catch (error) {
          toast.error("Account credentials are wrong")
          console.log(error);
        }
      };
  return (
    <>
        <Navbar/>
        <div className='login-section'>
        <img alt='login-cat' className='login-cat' src='https://i.imgur.com/AhB6SxR.png'/>
            <div className='login'>
                <form className='login-form'>
                <h1>Login right here meow!</h1>
                    <label>E-mail:
                        <input value={email} type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label>Password: 
                        <input value={password} type='password' placeholder='Password'  onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    
                    <button onClick={login} className='login-button' type='button' ><i class="fa-solid fa-right-to-bracket"></i> Login</button>
                </form>
                <p>Don't have an account?</p>
                <Link to='/signup'>Sign up</Link>

            </div>


        </div>
        <ToastContainer/>
        
        <Footer/>

    </>
    
  )
}

export default Login