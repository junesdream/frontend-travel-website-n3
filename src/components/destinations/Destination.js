import React from "react";
import "./Destination.css";

import Foto2 from "../../assets/foto-2.jpg";
import Foto9 from "../../assets/foto-9.jpg";
import Foto3 from "../../assets/foto-3.jpg";
import Foto4 from "../../assets/foto-4.jpg";
import Foto5 from "../../assets/foto-5.jpg";
import Foto1 from "../../assets/foto-1.jpg";
import Foto6 from "../../assets/foto-6.jpg";
import Foto7 from "../../assets/foto-7.jpg";
import Foto8 from "../../assets/foto-8.jpg";
import Foto10 from "../../assets/foto-10.jpg";


function Destinations() {
	return (
		<div name="destinations" className="destinations">
			<div className="container">
				<h1>All-Inclusive Resorts</h1>
				<p>On the Caribbean's Best Beaches</p>

				<div className="img-container">
					<img
						className="span-3 image-grid-row-2"
						src={Foto9}
						alt="/"
					/>
					<img src={Foto2} alt="/" />
					<img src={Foto3} alt="/" />
					<img src={Foto4} alt="/" />
					<img src={Foto5} alt="/" />
				</div>

				<div className="img-container">
					<img
						className="span-3 image-grid-row-2"
						src={Foto1}
						alt="/"
					/>
					<img src={Foto6} alt="/" />
					<img src={Foto7} alt="/" />
					<img src={Foto8} alt="/" />
					<img src={Foto10} alt="/" />
				</div>
			</div>
		</div>
	);
}

export default Destinations;
