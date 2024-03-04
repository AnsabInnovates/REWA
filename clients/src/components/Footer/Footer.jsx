import React from "react";
import "./Footer.css"

const Footer = ()=> {
    return(
<section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120}/>
            <span className="secondaryText">
                Our Vision is to make all People <br />
                the finest place to live for them..
            </span>
        </div>
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>
          <span>145 Sillicon Valley, FL 101, IND</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
    </div>
</section>
    );
}

export default Footer;