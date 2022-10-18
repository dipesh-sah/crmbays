import React, { useEffect } from "react";
import Logo from "../../../assests/img/Logo.png";
import { Link } from "react-router-dom";
import jQuery from "jquery";
import { megaMenuLink } from "./megaMenuLink";
function NavBar() {
  useEffect(() => {
    /*global jQuery */
    jQuery(document).ready(function () {
      jQuery(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon");
      //Checks if li has sub (ul) and adds class for toggle icon - just an UI

      jQuery(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");
      //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu

      jQuery(".menu > ul").before(
        '<a href="#" class="menu-toggle menu-mobile"><span></span><span></span><span></span></a>'
      );
      jQuery(".menu-mobile").click(function () {
        jQuery(".menu-mobile").toggleClass("toggled");
        jQuery("header").toggleClass("active");
      });

      //Adds menu-mobile class (for mobile toggle menu) before the normal menu
      //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
      //Normal menu is hidden if width is below 959px, and jQuery adds mobile menu
      //Done this way so it can be used with wordpress without any trouble

      jQuery(".menu > ul > li").hover(function (e) {
        if (jQuery(window).width() > 943) {
          jQuery(this).children("ul").stop(true, false).fadeToggle(150);
          e.preventDefault();
        }
      });
      //If width is more than 943px dropdowns are displayed on hover

      jQuery(".menu > ul > li").click(function () {
        if (jQuery(window).width() <= 943) {
          jQuery(this).children("ul").fadeToggle(150);
        }
      });
      //If width is less or equal to 943px dropdowns are displayed on click

      jQuery(".menu-mobile").click(function (e) {
        jQuery(".menu > ul").toggleClass("show-on-mobile");
        e.preventDefault();
      });
      //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story
    });
  }, []);
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <Link to={"/"}>
            <img
              loading="lazy"
              width={189}
              height={89.78}
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>
        <nav id="site-navigation" className="main-navigation">
          <div className="menu">
            <ul>
              <li>
                <Link to="#">
                  Services
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </Link>

                <ul className="full-width-menu">
                  <li className="megamenu">
                    <ul>
                      <li>
                        <ul>
                          {megaMenuLink.services
                            .slice(0, 4)
                            .map((curElem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={curElem.link}>{curElem.name}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="megamenu">
                    <ul>
                      <li>
                        <ul>
                          {megaMenuLink.services
                            .slice(4, 8)
                            .map((curElem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={curElem.link}>{curElem.name}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li></li>
                    </ul>
                  </li>
                  <li className="megamenu">
                    <ul>
                      <li>
                        <ul>
                          {megaMenuLink.services
                            .slice(8, 13)
                            .map((curElem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={curElem.link}>{curElem.name}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">
                  Training
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </Link>
                <ul>
                  {megaMenuLink.training.map((curElem, index) => {
                    return (
                      <li key={index}>
                        <Link to={curElem.link}>{curElem.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link to="#">
                  Sourcing
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </Link>
                <ul>
                  {megaMenuLink.sourcing.map((curElem, index) => {
                    return (
                      <li key={index}>
                        <Link to={curElem.link}>{curElem.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <Link to="#">
                  Industries
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </Link>

                <ul className="full-width-menu">
                  <li className="megamenu">
                    <ul>
                      <li>
                        <ul>
                          {megaMenuLink.industries
                            .slice(0, 4)
                            .map((curElem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={curElem.link}>{curElem.name}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="megamenu">
                    <ul>
                      <li>
                        <ul>
                          {megaMenuLink.industries
                            .slice(4, 8)
                            .map((curElem, index) => {
                              return (
                                <li key={index}>
                                  <Link to={curElem.link}>{curElem.name}</Link>
                                </li>
                              );
                            })}
                        </ul>
                      </li>
                      <li></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="contactBtn">
                <Link className="btn flex" to={"/contact"}>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
