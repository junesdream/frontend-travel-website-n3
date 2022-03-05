import React from 'react';
import './Hero.css';
import { AiOutlineSearch } from "react-icons/ai";
import Frontvideo from '../../assets/front.mp4';

const Hero = () => {
  return (
		<div name="adventure" className="hero">
			<video autoPlay loop muted id="video">
				<source src={Frontvideo} type="video/mp4" />
			</video>
			<div className="overlay"></div>
			<div className="content">
				<h1>First Comfort Adventure</h1>
				<h2>Top 1% Locations in East</h2>
				<form className="form">
					<div>
						<input type="text" placeholder="Search Destinations" />
					</div>
					<div>
						<button>
							<AiOutlineSearch className="icon" />
						</button>
					</div>
				</form>
			</div>
		</div>
  );
}

export default Hero