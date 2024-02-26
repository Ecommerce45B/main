import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import "./Header.css";
import logo from "../../assets/Union.png";
import Login from "../../components/Login/Login"
import Logout from "../../components/Login/Login";
import Filter from "../Filter/Filter";

function Navbar() {
  const navRef = useRef();
  const { isAuthenticated } = useAuth0();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
       <Link to="/">
        <img className="title-image" src={logo} />
        {/* <h1 className="main-title">TECH STORE</h1> */}
      </Link>
      <input
          className="search-input"
          type="text"
          placeholder="Busca lo que necesites..."
        />
        <Filter />
      <nav ref={navRef}>
          <img className="nav-btn-title nav-close-btn-title" src={logo} />
        <a>
          <NavLink to="/home" onClick={closeNavbar}>
            Home
          </NavLink>
        </a>
        <a>
          <NavLink to="/home" onClick={closeNavbar}>
            Categorias
          </NavLink>
        </a>
        <a>
          <NavLink to="/brands" onClick={closeNavbar}>
            Marcas
          </NavLink>
        </a>

        <a>
          <NavLink to="/budget" onClick={closeNavbar}>
            Presupuesto
          </NavLink>
        </a>
        <a>
          <NavLink to="/services" onClick={closeNavbar}>
            Servicios
          </NavLink>
        </a>
        <a>
          <NavLink to="/contact" onClick={closeNavbar}>
            Contact
          </NavLink>
        </a>
        <a>
          <NavLink to="/about" onClick={closeNavbar}>
            About
          </NavLink>
        </a>
        <a>
          <NavLink to="/faq" onClick={closeNavbar}>
            Preguntas Frecuentes
          </NavLink>
        </a>
        {isAuthenticated ? (
          <Logout closeNavbar={closeNavbar} />
        ) : (
          <Login closeNavbar={closeNavbar} />
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
