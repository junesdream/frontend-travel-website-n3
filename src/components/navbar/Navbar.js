import React, { useState } from 'react';
import './Navbar.css'
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaInstagram, FaDiscord  } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {

	const [ nav, setNav ] = useState(false);
	const handleNav = () => setNav(!nav);

  return (
		<div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
			<div className={nav ? "logo dark" : "logo"}>
				{/* <h2>ADVENTURE</h2> */}
				<span>Rainbow</span> <br />
				<span>ADVENTURE</span>
			</div>
			<ul className="nav-menu">
				<Link to="home" smooth={true} duration={500}><li>Home</li></Link>
				<Link to="destinations" smooth={true} duration={500}><li>Destinations</li></Link>
				<Link to="carousel" smooth={true} duration={500}><li>Adventure</li></Link>
				<Link to="search" smooth={true} duration={500}><li>Book</li></Link>
				<Link to="selects" smooth={true} duration={500}><li>Views</li></Link>
			</ul>
			<div className="nav-icons">
				<BsSearch className="icon" style={{ marginRight: "1rem" }} />
				<BsPerson className="icon" />
			</div>
			<div className="hamburger" onClick={handleNav}>
				{!nav ? (
					<AiOutlineMenu className="icon" />
				) : (
					<AiOutlineClose
						style={{ color: "#AAF0D1" }}
						className="icon"
					/>
				)}
			</div>
			<div className={nav ? "mobile-menu active" : "mobile-menu"}>
				<ul className="mobile-nav">
					<Link to="home" smooth={true} duration={500}><li>Home</li></Link>
				<Link to="destinations" smooth={true} duration={500}><li>Destinations</li></Link>
				<Link to="carousel" smooth={true} duration={500}><li>Adventure</li></Link>
				<Link to="search" smooth={true} duration={500}><li>Book</li></Link>
				<Link to="selects" smooth={true} duration={500}><li>Views</li></Link>
				</ul>
				<div className="mobile-menu-bottom">
					<div className="menu-icons">
						<button>Search</button>
						<button>Account</button>
					</div>
					<div className="social-icons">
						<FaFacebook className="icon" />
						<FaLinkedin className="icon" />
						<FaInstagram className="icon" />
						<FaDiscord className="icon" />
					</div>
				</div>
			</div>
		</div>
  );
}

export default Navbar