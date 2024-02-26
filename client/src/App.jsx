// import './App.css'

import { Route, Routes, useLocation } from "react-router-dom";

import MultiFilters from "./components/Multifilter";

// import {Home, About, Services} from "./components/pages"
import Home from "./components/pages/Home"
import Filter from "./components/pages/Filter"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import Budget from "./components/pages/Budget";
import Brands from "./components/pages/Brands";
import Header from "../src/Components/Header/Header"

// import {Home, About, Services} from "./Components/pages"
import Landing from './Components/Landing/Landing'
import Home from "./Components/pages/Home"
import About from "./Components/pages/About"
import Services from "./Components/pages/Services"
import Contact from "./Components/pages/Contact/Contact"
import Budget from "./Components/pages/Budget";
import Brands from "./Components/pages/Brands";
import Profile from "./Components/Profile/Profile"
import Faq from "./Components/pages/Faq/Faq"
import Detail from "./Components/Detail/Detail"

function App() {

  const location = useLocation()

  return (
    <>
<<<<<<< HEAD
      {/* <Filter /> */}
      <Header />
=======
      {
        location.pathname !== '/' && <Header/>
>>>>>>> 979ac8238826016246054146b738865c5ab5e77c
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
        <Route path="/about" element={<About />} />
        {/* <Route path="/filter" element={<Filter />} /> */}
        <Route path="/brands" element={<Brands />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/faq" element={<Faq />} /> 
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      <div className='App'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        imagen={contents.imagen}
                        nombre={contents.nombre}
                        precio={contents.precio}
                        nroserie={contents.nroserie}
                        descripcion={contents.descripcion}
                        rating={contents.rating}
                    />
                ))}
            </div>
    </>
  ) 
}

export default App
