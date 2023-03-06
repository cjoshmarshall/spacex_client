import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Error() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="error">
      <div className="error_container">
        <div className="error_subcontainer">
          <h1 className="error_title">404</h1>
          <p className=" error_subtitle">Something went wrong !</p>
        </div>
        <div className="error_buttonContainer">
          <Link to="/">
            <button className="error_button">BACK TO HOME</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
