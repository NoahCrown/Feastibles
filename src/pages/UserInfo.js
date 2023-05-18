import React, {useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../ContextProvider'

import { ToastContainer, toast } from 'react-toastify'

const UserInfo = () => {

    const {formData, setFormData} = useContext(MyContext)
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const handleSubmitInfo =(e) => {
      toast.success("Infomrmation saved!")
        e.preventDefault()
        navigate('/')

    }

    
    

  return (
    <>
    <Navbar/>

    
    <div className='user-info'>
        <form className='user-info-forms'>
            <h1>Please fill up the informations needed</h1>

            <label>Name</label>
            <input name='name' placeholder='Name' value={formData.name} onChange={handleChange}/>
            <label>Address</label>
            <input name='address' placeholder='Address' value={formData.address} onChange={handleChange}/>
            <label>Phone number</label>
            <input name='phoneNumber' placeholder='Phone Number' value={formData.phoneNumber} onChange={handleChange}/>
            <button onClick={handleSubmitInfo}>Save</button>

        </form>
    </div>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default UserInfo