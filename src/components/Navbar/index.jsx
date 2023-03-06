import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  const handleToggle = () => {
    document.getElementById("navbar").style.width = "0%";
  };

  return (
    <div className="navbar" id="navbar">
      <div className="navbar_icon">
        <div className="navbar_hamburger" onClick={handleToggle}>
          <div className="navbar_menu"></div>
        </div>
      </div>
      <div className="navbar_container">
        <ul className="navbar_order">
          <li className="navbar_list" onClick={handleToggle}>
            <Link to="/mission">MISSION</Link>
          </li>
          <li className="navbar_list" onClick={handleToggle}>
            <Link to="/launches">LAUNCHES</Link>
          </li>
          <li className="navbar_list" onClick={handleToggle}>
            <Link to="/rockets">ROCKETS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
