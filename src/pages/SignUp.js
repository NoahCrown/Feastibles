import {React, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link, useNavigate} from 'react-router-dom'
import auth  from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const signUp = async (e) => {
        e.preventDefault();
        try {
          const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredentials);
          navigate('/userinfo')
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <>
        <Navbar/>
        <div className='login-section'>
        <img className='login-cat' src='https://i.imgur.com/qWHtGwn.png'/>
            <div className='login'>
                <form className='login-form'>
                <h1>Sign up right here meow!</h1>
                    <label>E-mail:
                        <input value={email} type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    <label>Password: 
                        <input value={password} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    </label>
                    
                    <button onClick={signUp} className='login-button' type='button' ><i class="fa-solid fa-right-to-bracket" ></i> Sign up</button>
                </form>
                <p>Already have an account?</p>
                <Link to='/login'>Login instead</Link>

            </div>


        </div>
        
        <Footer/>

    </>
    
  )
}

export default SignUp