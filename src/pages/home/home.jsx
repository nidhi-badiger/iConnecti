import React from "react";

import "./home.css"

import Navbar from "../../Components/Navbar";
import Register from "../Register/register";
const Home = () => {
  return (
    <>
    
      <div className="homeContainer">
        <Navbar/>
        <Register/>
        
      </div>
    </>
  );
};

export default Home;
