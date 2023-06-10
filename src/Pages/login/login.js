import React from 'react'
import { useState } from "react";
import "./login.css"
import FormInput from './FormInput';

const Login = () => {

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };


  return (
    <div className='login'>
    <div className='loginWrapper'>
    <div className='loginRight'>
            <div className='loginStart'>
            <form onSubmit={handleSubmit} >
            
            {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
            <div className='loginEnd'>
            <button className='SignInButton' >Login</button>
            <p className='passwordForgot'>Forgot Password?</p>
            </div>
            
            </form>
            </div>
          </div>  
            <p>Not yet Registered? Register as</p>
            <div className='registerButtons'>
            <button className='RegisterButton'>Company SPOC</button>
            <button className='RegisterButton'>College SPOC</button>
            <button className='RegisterButton'>Student</button>
            </div>

        </div>
    </div>

  );
}

export default Login