import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Service from "./Component/Service"
import Navbar from "./Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          {/* <Redirect to="/" /> */}

        </Routes>
      </Router>
    </>
   
  )
}
