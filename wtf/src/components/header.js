/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [header, setHeader] = useState(false);
  const [isMobile, setisMobile] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className="main-container">
      <div className={header ? "header-wrapper active" : "header-wrapper"}>
        <div className="inner-header-wrapper">
          <div className="header-logo">
            <img src={logo} alt="WTF-logo" />
          </div>
          <div className={isMobile ? "header-list-mobile" : "header-list"}>
            <ul>
              <li>Fitness</li>
              <li>Nutrition</li>
              <li>Gyms</li>
              <li>Become WTF Partner</li>
              <li>About Us</li>
              <li>
                <button>LOGIN</button>
              </li>
            </ul>
          </div>
          <button className="mobileView" style={{background: "transparent"}} onClick={()=> setisMobile(!isMobile)}>
            {isMobile ? (
              <MenuIcon className="menu-Icon" />
            ) : (
              <MenuIcon className="menu-Icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
