import React, { Component } from "react";
import "./header.css";
import Coffee1 from "./img/coffee1.png";
import Coffee2 from "./img/coffee2.png";
import Coffee3 from "./img/coffee3.png";
import Coffee4 from "./img/coffee4.png";
export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-top">
          <div className="top-cards">
            <div className="card1">
              <h1>
                <span>01</span> Best Coffee Flavour
              </h1>
              <img src={Coffee1} alt="" />
            </div>

            <div className="card2">
              <h2>
                <span>02</span> Place to get lost
              </h2>
              <img src={Coffee2} alt="" />
            </div>

            <div className="card3">
              <h3>
                <span>03</span> Proper roesting
              </h3>
              <img src={Coffee3} alt="" />
            </div>
          </div>
        </div>

        <div className="header-body">
          <div className="head-body-left">
            <img className="h-b-l-i1" src={Coffee2} alt="" />
            <img className="h-b-l-i2" src={Coffee1} alt="" />
            <img className="h-b-l-i3" src={Coffee4} alt="" />
          </div>

          <div className="head-body-right">
            <h1>Our history</h1>
            <h2>Create a new story with us</h2>
            <h3>mauris rhoncus in imperdiet placerat. vestibu emismd nisl suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa nibhtincidunt. donec et nibh maximus, est eu, mattis nuce. preasent ut quam quis quam venen atis fringilla. morbi vastibulum id tells mmodo mattis. aliauam erat volutpal.</h3>
        </div>

        </div>

      
      </div>
    );
  }
}
