import React from "react";
import "./Search.css";

import Gold from "../../assets/gold.jpg";

function Search() {
	return (
		<div name="book" className="search">
			<div className="container">
				<div className="left">
					<h2>COMFORT INCLUDED VACATIONS FOR TWO PEOPLE</h2>
					<p>
						Come experience the very pinnacle of comfort Caribbean
						all-inclusive vacations for couples at lockal Resorts.
						Our comfort adventure resorts, set along the most gorgeous
						lockal settings and exquisite cities in South Korea,
						Seoul, Pusan, Inchoen, Kwangju, Chuncheon and
						Jejuisland, feature unlimited gourmet dining, unique bars
						serving premium liquors and wines, and every land and
						 traditonal sport, including complimentary green fees at our
						forest resorts and PADI® certified gikong yoga at most
						resorts. If you are planning a wedding, Seoul Express Adventurfe is the
						leader in Far East destination weddings and honeymoon
						packages.
					</p>
					<div className="search-col-2">
						<div className="box">
							<div>
								<img className="gold-img"
									src={Gold}
									alt="/"
									style={{ marginRight: "1rem", boderRadius:"50%" }}
								/>
							</div>
							<div>
								<h3>WORLD'S LEADING</h3>
								<p>
									ALL-INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW
								</p>
							</div>
						</div>
						<div className="box">
							<div>
								<h3>NO ONE INCLUDES MORE</h3>
								<p>
									ALL-INCLUSIVE COMPANY FOR 10 YEARS IN-A-ROW
								</p>
								<button>View Packages</button>
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="promo">
						<h4 className="save">GET AN ADDITIONAL 15% OFF</h4>
						<p className="timer">24 HOURS LEFT!</p>
						<p className="offers">VIEW ALL CURRENT OFFERS</p>
					</div>
					<form>
						<div className="input-wrap">
							<label>Destination</label>
							<select>
								<option value="1">Seoul</option>
								<option value="1">Pusan</option>
								<option value="1">Incheon</option>
								<option value="1">Kwangju</option>
								<option value="1">Chuncheon</option>
								<option value="1">Kyungju</option>
								<option value="1">Jeju Islanad</option>
							</select>
						</div>
						<div className="date">
							<div className="input-wrap">
								<label>Check-In</label>
								<input type="date" />
							</div>
							<div className="input-wrap">
								<label>Check-Out</label>
								<input type="date" />
							</div>
						</div>
						<button>Rates & Availabilities </button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Search;
