import React, { Component } from "react";
import "./content.css";
import Coffee1 from "./img/coffee5.png";
import Shoppingbag from "./img/shopping-bag.png";
import Star from "./img/star.png";
import Mixer from "./img/mixer.png";
export default class Content extends Component {
	render() {
		return (
			<div className="content">
				<div className="content-top">
					<h1 className="content-title">Popular Product</h1>
					<h2 className="content-title2">Coffee popular Product</h2>
					<div className="content-product">
						<div className="product1">
							<img className="product1-img" src={Coffee1} alt="" />
							<h1>BRAZIL COFFEE GRED</h1>
							<button>
								<img className="btn-img" src={Shoppingbag} alt="" /> Add to cart
							</button>
						</div>
						<div className="product2">
							<img className="product1-img" src={Coffee1} alt="" />
							<img className="product2-img" src={Star} alt="" />
							<h1>brazil coffee gred</h1>
							<h2>
								PRICE-<span>$320.00/</span>$358
							</h2>
						</div>
						<div className="product2">
							<img className="product1-img" src={Coffee1} alt="" />
							<img className="product2-img" src={Star} alt="" />
							<h1>brazil coffee gred</h1>
							<h2>
								PRICE-<span>$320.00/</span>$358
							</h2>
						</div>
					</div>
					<div className="content-top-btn">
						<button>VIEW ALL PRODUCT</button>
					</div>
				</div>
				<div className="content-body">
					<div className="content-body-product">
						<div className="content-body-product-left">
							<img src={Mixer} alt="" />
						</div>
						<div className="content-body-product-text">
							<h1>Coffee machine, buy for home</h1>
							<h2>
								mauris rhoncus in imperdiet placerat. vestibu emismd nisl
								suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
								nibhtincidunt. donec et nib maximus, est eu, mattis nuce.
								preasent ut quam quis quam venen atis fri ngilla. morbi
								vastibulum id tells mmodo mattis. aliauam erat volutpal.
							</h2>
							<button>Discover now</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
