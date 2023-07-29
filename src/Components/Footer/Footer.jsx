import React from "react";
import "./Footer.css";
import Logo from "./img/Logo.png";
const Footer = () => {
	return (
		<div className="footer">
			<div className="registr">
				<ul className="footer-ul">
					<img className="logo" src={Logo} alt="" />
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Aboute</a>
					</li>
					<li>
						<a href="">Menu</a>
					</li>
					<li>
						<a href="">Reservation</a>
					</li>
					<li>
						<a href="">Pages</a>
					</li>
					<li>
						<a href="">Shop</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<input
						className="registr-inp"
						type="text"
						placeholder="Enter your email"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
