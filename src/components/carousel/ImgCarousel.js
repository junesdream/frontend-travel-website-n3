import React from "react";
import "./ImgCarousel.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ImgCarousel() {
	return (
		<div name="carousel" className="container">
			<Carousel
				className="carousel"
				showArrows={true}
				autoPlay={false}
				infiniteLoop={true}
			>
				<div>
					<img
						src="https://images.pexels.com/photos/6688747/pexels-photo-6688747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
					{/* <p className="legend">Maldives 1</p> */}
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/8850899/pexels-photo-8850899.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
					{/* <p className="legend">Legend 2</p> */}
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/8850964/pexels-photo-8850964.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
				
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/5863413/pexels-photo-5863413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
					{/* <p className="legend">Legend 3</p> */}
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/380710/pexels-photo-380710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
					{/* <p className="legend">Legend 3</p> */}
				</div>
				<div>
					<img
						src="https://images.pexels.com/photos/3671177/pexels-photo-3671177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="/"
					/>
					{/* <p className="legend">Legend 3</p> */}
				</div>
			</Carousel>
		</div>
	);
}

export default ImgCarousel;
