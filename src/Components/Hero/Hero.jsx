import React, { Component } from "react";
import "./hero.css";
import Coffee1 from "./img/coffee1.png";
import Coffee2 from "./img/coffee2.png";
import Coffee3 from "./img/coffee3.png";
import Coffee4 from "./img/coffee4.png";
import Coffee5 from "./img/coffee5.png";
import Coffee6 from "./img/coffee6.png";
import Arrow from "./img/arrow-right.png";

export default class Hero extends Component {
	render() {
		return (
			<div className="hero">
				<div className="hero-title">
					<h1>Menu</h1>
					<h2>Coffee popular menu</h2>
				</div>
				<div className="hero-menu-card">
					<div className="hero-card">
						<img src={Coffee1} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee2} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee3} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee1} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee2} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee3} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee1} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
					<div className="hero-card">
						<img src={Coffee2} alt="" />
						<h3>Americano rosted gred</h3>
						<p>$12:00</p>
					</div>
				</div>
				<div className="hero-test">
					<div className="hero-test-title">
						<h1>Testimonial</h1>
						<h2>Our latest news</h2>
					</div>
					<div className="hero-test-card">
						<div className="news-card">
							<img className="news-card-img" src={Coffee4} alt="" />
							<div className="line">
								<h1>
									<span>By:</span> rasaline
								</h1>
								<h1>23.01.2021</h1>
							</div>
							<div className="line">
								<h4 className="news-card-dec">
									Ideal cocktails from barmen....
								</h4>
							</div>
							<div className="line">
								<span>
									Read More
									<img src={Arrow} alt="" />
								</span>
							</div>
						</div>
						<div className="news-card">
							<img className="news-card-img" src={Coffee5} alt="" />
							<div className="line">
								<h1>
									<span>By:</span> rasaline
								</h1>
								<h1>23.01.2021</h1>
							</div>
							<div className="line">
								<h4 className="news-card-dec">
									Ideal cocktails from barmen....
								</h4>
							</div>
							<div className="line">
								<span>
									Read More
									<img src={Arrow} alt="" />
								</span>
							</div>
						</div>
						<div className="news-card">
							<img className="news-card-img" src={Coffee6} alt="" />
							<div className="line">
								<h1>
									<span>By:</span> rasaline
								</h1>
								<h1>23.01.2021</h1>
							</div>
							<div className="line">
								<h4 className="news-card-dec">
									Ideal cocktails from barmen....
								</h4>
							</div>
							<div className="line">
								<span>
									Read More
									<img src={Arrow} alt="" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
