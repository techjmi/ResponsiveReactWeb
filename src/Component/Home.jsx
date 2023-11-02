import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common"
const Home = () => {
  return (
   <>
     <Common
       name="Welcome To our home page"
       visit="/contact"
       btname="Contact me"
       />
   </>


  );
};

export default Home;
