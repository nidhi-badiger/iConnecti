import React, { useState } from 'react'
import "./register.css"
import Navbar from '../../Components/Navbar'
import FormInput from './Input/FormInput';
const Register = () => {

  const [values , setValues] = useState({
    username : "",
    password :"",
    confirmPassword: "",
    companyname : "",
    companyemail : "",
    companyphone : "",
  });

  const inputs = [
    {
      id :1,
      name: "username",
      type : "text",
      placeholder : "User Name",
      errorMessage : "Username should be of at least 3 letters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3-}$",
    },
    {
      id :2,
      name: "password",
      type : "Password",
      placeholder : "Password",
      errorMessage : "Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character!",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id :3,
      name: "confirmPassword",
      type : "Password",
      placeholder : "Retype Password",
      errorMessage : "Passwords don't match!",
      required: true,
      pattern : values.password
    },
    {
      id :4,
      name: "companyname",
      type : "text",
      placeholder : "Company Name",
      errorMessage : "",
      required: true,
    },
    {
      id :5,
      name: "companyspocname",
      type : "text",
      placeholder : "Company SPOC Name",
      errorMessage : "Username should be of at least 3 letters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3-}$",
    },
    {
      id :6,
      name: "companyemail",
      type : "email",
      placeholder : "Company SPOC Email",
      errorMessage : "Not a valid email",
      required: true,
    },
    {
      id :7,
      name: "companyphone",
      type : "text",
      placeholder : "Company SPOC Phone",
      errorMessage : "Phone number should be of 10 digits!",
      required: true,
      pattern: "^[0-9]{10}$",
    }
  ];

  const onChange = (e) =>{
    setValues ({...values , [e.target.name]: e.target.value});
  };

console.log(values);

  return (
    <div className='login'>
    
    <div className='loginWrapper'>
       
        <div className='loginRight'>

            {/* <div className='loginStart'> */}
         <form >
            <h3 className='loginTitle'>Company Registration Form</h3>

        {
          inputs.map((input)=>
            <FormInput key ={input.id}  {...input} value = {values[input.name]} onChange = {onChange}/>
          )
        }
        


        <button className='loginRegisterButton'>Create a account</button>
        </form>
            </div>
        </div>
    </div>

    // </div>
  )
}

export default Register