import React from "react";
import "./Footer.css";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaDiscord,
	FaYoutube,
} from "react-icons/fa";

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="top">
					<span>Rainbow ADVENTURE</span> 
					<div className="social">
						<FaFacebook className="icon" />
						<FaInstagram className="icon" />
						{/* <FaLinkedin className="icon" /> */}
						<FaDiscord className="icon" />
						{/* <FaYoutube className="icon" /> */}
					</div>
				</div>
				<div className="bottom">
					<div className="left">
						<ul>
							<li>About</li>
							<li>Partnerships</li>
							<li>Careers</li>
							<li>Newsroom</li>
							<li>Advertising</li>
						</ul>
					</div>
					<div className="right">
						<ul>
							<li>Contact</li>
							{/* <li>Terms</li> */}
							<li>Policy</li>
							<li>Privacy</li>
							<li>Pricing</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
