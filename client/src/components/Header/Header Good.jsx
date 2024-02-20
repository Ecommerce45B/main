import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>TECH STORE</h3>
			<nav ref={navRef}>

			<a>
          		<NavLink to="/Home">Home</NavLink>
        		º</a>
				<a>
          		<NavLink to="/brands">Marcas</NavLink>
        		</a>
				<a>
          		<NavLink to="/budget">Presupuesto</NavLink>
        		</a>
				<a>
          		<NavLink to="/services">Servicios</NavLink>
        		</a>
				<a>
          		<NavLink to="/contact">Contact</NavLink>
        		</a>
				<a>
          		<NavLink to="/about">About</NavLink>
        		</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
