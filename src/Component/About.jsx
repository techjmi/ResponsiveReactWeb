import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Common from "./Common"
// import { Link , NavLink} from "react-router-dom"; 


const About = () => {
  return (
   <>
    
     <Common
        name="Welcome To our About Page"
        visit="/service"
        btname="Lets Start"
        />
   </>
     
   
  );
};

export default About;
