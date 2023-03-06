import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import "./index.css";

function Header() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const handleToggle = () => {
    document.getElementById("navbar").style.width = "100%";
  };

  return (
    <div className="header" id="header">
      <div className="header_container">
        <div className="header_subcontainer">
          <Link to="/">
            <img src={logo} alt=" " className="header_logo" />
          </Link>
        </div>
        <ul className="header_order">
          <li className="header_list">
            <Link to="/mission" className="header_link">
              MISSION
            </Link>
          </li>
          <li className="header_list">
            <Link to="/launches" className="header_link">
              LAUNCHES
            </Link>
          </li>
          <li className="header_list">
            <Link to="/rockets" className="header_link">
              ROCKETS
            </Link>
          </li>
        </ul>
        <div className="header_hamburger" onClick={handleToggle}>
          <div className="header_menu"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
