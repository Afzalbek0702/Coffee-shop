import React, { useState } from "react";
import "./navbar.css";
// import './respons-nav.css'
import Logo from "./img/Logo.png";
import Search from "./img/search.png";
import Shopping from "./img/shopping-bag.png";
import Play from "./img/Play.png";
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  console.log(menu);
	return (
		<div>
			<div className="navbar">
				<ul>
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

					<img className="logo" src={Logo} alt="" />
					{/* <i class="fa-solid fa-xmark"></i> */}
					<i onClick={() => setMenu(true)} className="fa-solid fa-bars"></i>
					<li>
						<a href="">Pages</a>
					</li>
					<li>
						<a href="">Shop</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<img className="shop" src={Shopping} alt="" />
					<img className="search" src={Search} alt="" />
				</ul>
			</div>
			<div className={menu ? "mobile-active" : "mobile-disable"}>
				<ul className="mobile">
					<i onClick={() => setMenu(false)} className="fa-solid fa-xmark"></i>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Aboute</a>
					</li>
					<li>
						<a href="#">Menu</a>
					</li>
					<li>
						<a href="#">Reservation</a>
					</li>
					<li>
						<a href="#">Pages</a>
					</li>
					<li>
						<a href="#">Shop</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<img className="shop" src={Shopping} alt="" />
					<br />
				</ul>
			</div>
			<div className="nav-body">
				<h1>Enjoy Your Morning Coffee.</h1>
				<h2>
					The coofee is brewed by fist roasting the green coffee beans over hot
					coals in brazier. given to Opportunity
				</h2>
				<button className="navbtn">TEST COFFEE</button>
				<img className="play" src={Play} alt="" />
			</div>
		</div>
	);
};

export default Navbar;
