import React from "react";

import "./home.css"


import Register from "../Register/register";
import Navbar from "../../Components/Navbar";
const Home = () => {
  return (
    <>
   <Navbar/> 
      <div className="homeContainer">
        
        <Register/>
        
      </div>
    </>
  );
};

export default Home;
