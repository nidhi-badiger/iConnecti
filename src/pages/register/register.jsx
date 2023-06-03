import React from 'react'
import "./register.css"
import Navbar from '../../Components/Navbar'
const Register = () => {
  return (
    <div className='login'>
    
    <div className='loginWrapper'>
        <div className='loginLeft'>
            <h3 className='loginTitle'>Company Registration Form</h3>
            <span className='loginDes'></span>
        </div>
        <div className='loginRight'>

            <div className='loginStart'>
            <input placeholder='UserName' className='password' />
        
        <input placeholder='Password' className='password' />
        <input placeholder='Retype Password' className='password' />
        <input placeholder='Company Name' className='password' />
        <input placeholder='Company SPOC email' className='email'/>
        <input placeholder='Company SPOC Phone' className='email'/>
        
        <button className='loginRegisterButton'>Create a account</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Register