import React from "react";
import Errormsz404 from "../../assests/img/error404.webp";
import DownArrow from "../../assests/icons/down-arrow.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="pageNotFound">
        <div className="container">
          <div className="inner flex">
            <div className="errorVisuals">
              <img src={Errormsz404} alt="ErrorMsz" />
            </div>
            <div className="msz flex">
              <h1>Sorry!</h1>
              <p>Try referring to the top pages instead.</p>
              <a className="scroller" href="#topPages">
                <img src={DownArrow} alt="down-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="top-pages" id="topPages">
        <div className="container">
          <h2>Top Pages</h2>
          <div className="inner">
            <div className="top-links">
              <Link to={"/"}>
                <span>1</span>Home
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/services"}>
                <span>2</span>Services
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/industries"}>
                <span>3</span>Industries
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/blog"}>
                <span>4</span>BLog
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/training"}>
                <span>5</span>Training
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/sourcing"}>
                <span>6</span>Sourcing
              </Link>
            </div>
            <div className="top-links">
              <Link to={"/contact"}>
                <span>7</span>Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
