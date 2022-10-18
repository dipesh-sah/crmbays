import React from "react";

import { Link } from "react-router-dom";
import BannerImage from "../../../assests/img/BannerImage.svg";

function HeroSection() {
  return (
    <div className="hero-main txt_white bg">
      <div className="container flex">
        <div className="content-left">
          <h1 className="bar">
            Salesforce Consultancy, Development, Training Sourcing, and Staff Augmentation
          </h1>

          <Link className="btn" to={"/contact"}>
            <span>Speak To Our Experts</span>
          </Link>
        </div>
        <div className="content-right ">
          <img
            loading="lazy"
            height={589}
            width={589}
            src={BannerImage}
            alt="BannerImage"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
