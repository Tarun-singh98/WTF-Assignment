import React from "react";
import { footerObject } from "./footer-objects";
import logo from "../assets/logo.png";
import "./footer.css";

function Footer() {
  return (
    <div className="Main-footer-container">
      <div className="footer-outer-wrapper">
        <div className="footer-inner-wrapper">
          <div className="wtf-icon">
            <img src={logo} alt="WTF-logo" />
          </div>
          <div className="footer-content">
            {footerObject.map((item) => {
              return (
                <div className="footer-inner-content">
                  <h5>{item.title}</h5>
                  <ul>
                    {item.options.map((obj) => {
                      return (
                        <li>
                          {obj.icons === null ? "" : obj.icons}
                          {" "}
                          {obj.content}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
