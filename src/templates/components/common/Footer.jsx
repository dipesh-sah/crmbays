import React from "react";
import Logo from "../../../assests/img/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="txt_white">
        <div className="container">
          <div className="footer-top">
            <div className="footer-desc">
              <Link to={"/"}>
                <img
                  loading="lazy"
                  height={"90%"}
                  width={"90%"}
                  src={Logo}
                  alt="Footer logo"
                />
              </Link>
              <p>
                CRMBAYS offers Consulting, Development, Training, Sourcing and
                Staff Augmentation for Salesforce.
              </p>
            </div>
            <div className="footer-link">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/career"}>Career</Link>
                </li>
                <li>
                  <Link to={"/ourteam"}>Our Team</Link>
                </li>
                <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom ">
        <div className="container flex">
          <div className="copyright txt_white">
            <p>
              &copy; 2022 ALL RIGHT RESERVED BY{" "}
              <span>
                <a
                  href="https://www.bay20.com/"
                  target="_blank"
                >
                  {" "}
                  BAY20 SOFTWARE CONSULTANCY SERVICES PVT. LTD.
                </a>
              </span>
            </p>
          </div>
          <div className="social-link">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f flex"></i>
            </a>
            <Link to={"#"}>
              <i className="fa-brands fa-instagram flex"></i>
            </Link>
            <Link to={"#"}>
              <i className="fa-brands fa-linkedin-in flex"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
