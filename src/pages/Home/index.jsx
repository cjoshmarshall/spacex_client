import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home">
        <div className="home_container1">
          <div className="home_subcontainer1">
            <h1 className="home_title1">Welcome to SPACEX !</h1>
            <p className="home_description1">
              When we see the earth from space, we see ourselves as a whole.
            </p>
            <h1 className="home_author1">- STEPHEN HAWKING</h1>
            <div className="home_buttonContainer1">
              <Link to="/launches">
                <button className="home_button1">RECENT LAUNCHES</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_container2">
          <div className="home_subcontainer2">
            <div className="home_innercontainer2">
              <p className="home_postTitle2 reveal">RECENT LAUNCH</p>
              <h1 className="home_title2 reveal">STARLINK-15</h1>
              <div className="home_buttonContainer2 reveal">
                <Link to="/launches/109">
                  <button className="home_button2">VIEW LAUNCH</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home_container3">
          <div className="home_subcontainer3">
            <div className="home_innercontainer3">
              <p className="home_postTitle3 reveal">RECENT NEWS</p>
              <h1 className="home_title3 reveal">ROCKETS UPDATE</h1>
              <div className="home_buttonContainer3 reveal">
                <Link to="/rockets/starship">
                  <button className="home_button3">VIEW ROCKET</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
