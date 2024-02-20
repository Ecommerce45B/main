import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import "../Header/Header.css";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<nav>
		<Link to="/">
        Tech Store
      	</Link>

		  <div className="nav-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
	  
		<ul className={menuOpen ? "open" : ""}>
			<nav ref={navRef}>
			<li>
          <NavLink to="/home">Home</NavLink>
        </li>
				<li>
          <NavLink to="/brands">Marcas</NavLink>
        </li>
				<li>
          <NavLink to="/budget">Presupuesto</NavLink>
        </li>
				<li>
          <NavLink to="/service">Servicios</NavLink>
        </li>
				<li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
				<li>
          <NavLink to="/about">About</NavLink>
        </li>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
		</ul>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</nav>
	);
}

export default Header;
