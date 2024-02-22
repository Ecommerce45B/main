// import './App.css'
import { Route, Routes } from "react-router-dom";
import contents from './Components/content'
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "../src/Components/Header/Header"

// import {Home, About, Services} from "./Components/pages"
import Landing from './Components/Landing/Landing'
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact"
import Budget from "./Components/pages/Budget";
import Brands from "./Components/pages/Brands";

function App() {

  const location = useLocation()

  return (
    <>
      {
        location.pathname !== '/' && <Header/>
      }
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </>
  ) 
}

export default App
