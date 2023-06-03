import React from 'react'
// import "./login.css"
const Login = () => {
  return (
    <div className='login'>
    <div className='loginWrapper'>
             
        <div className='loginRight'>

            <div className='loginStart'>
            <input placeholder='username' className='password' />
            <input placeholder='password' className='password' />
       
            <button className='SignInButton' >Sign In</button>
            <span className='passwordForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>Create a account</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Login