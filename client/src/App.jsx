// import './App.css'
import { Route, Routes } from "react-router-dom";

import Header from "../src/components/Header/Header"
import Products from "./components/Products/Products";

// import {Home, About, Services} from "./components/pages"
import Landing from './components/Landing/Landing'
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Category from "./components/pages/Category"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import Budget from "./components/pages/Budget";
import Brands from "./components/pages/Brands";
import Profile from "./components/Profile/Profile"
import Faq from "./components/pages/Faq/Faq"
import Detail from "./components/Detail/Detail"

function App() {

  return (
    <>
      {/* <Filter /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
 
    </>
  ) 
}

export default App
