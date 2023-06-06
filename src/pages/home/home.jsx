import React from "react";

import "./home.css"
 import MainScreen from "../mainScreen/MainScreen"


import Register from "../register/register";
import Navbar from "../../Components/Navbar";
const Home = () => {
  return (
    <>
   <Navbar/> 
      <div className="homeContainer">
      <Register/>
        
       {/* <MainScreen /> */}
        
      </div>
    </>
  );
};

export default Home;
