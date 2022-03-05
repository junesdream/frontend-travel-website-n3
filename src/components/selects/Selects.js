import React from "react";
import "./Selects.css";

import SelectsImg from "../selectsImg/SelectsImg";

function Selects() {
	return (
		<div name="views" className="selects">
			<div className="container">
				<SelectsImg
					bgImg="https://images.pexels.com/photos/2519330/pexels-photo-2519330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="Seoul"
				/>
				<SelectsImg
					bgImg="https://images.pexels.com/photos/8850965/pexels-photo-8850965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="Pusan"
				/>
				<SelectsImg
					bgImg="https://images.pexels.com/photos/6715705/pexels-photo-6715705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="Incheon"
				/>
				<SelectsImg
					bgImg="https://images.pexels.com/photos/4840730/pexels-photo-4840730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="Kwangju"
				/>
				<SelectsImg
					bgImg="https://images.pexels.com/photos/6060183/pexels-photo-6060183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					text="Kyungju"
				/>
				<SelectsImg
					bgImg="https://images.pexels.com/photos/8850933/pexels-photo-8850933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
					text="Jeju Island"
				/>
			</div>
		</div>
	);
}

export default Selects;
