import React from 'react'
import './AdminLogin.css';
import FormInput from '../login/FormInput';
import Topbar from '../../Components/Topbar';
const AdminLogin = () => {
  return (
    <div className='outer'>
    <Topbar/>
    <div className='login'>
    
    <div className='loginWrapper'>
    <div className='header'></div>
       
            <div className='loginStart'>
            <form  method='POST' >
            
            <FormInput/>
            <FormInput />
            <div className='loginEnd'>
            <button className='SignInButton' type='Submit' >Login</button>
            <p className='passwordForgot'>Forgot Password?</p>
            </div>
            
            </form>
            </div>
          
            <p>Not yet Registered? Register as</p>
            <div className='registerButtons'>
            <button className='RegisterButton' >Company SPOC</button>
            <button className='RegisterButton'>College SPOC</button>
            <button className='RegisterButton'>Student</button>
           
            </div>

        </div>
    </div>
    </div>
  )
}

export default AdminLogin