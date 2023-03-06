import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "./index.css";

function Mission() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getHistory = async () => {
      try {
        const res = await axios.get("https://api.spacexdata.com/v3/history");
        setHistory(res.data);
        setLoading(true);
      } catch (err) {
        alert("Something went wrong");
      }
    };
    getHistory();
  }, []);

  return (
    <>
      {loading ? (
        <div className="mission">
          <div className="mission_container1">
            <div className="mission_subcontainer1">
              <h1 className="mission_title1">OUR MISSION</h1>
              <h2 className="mission_subtitle1">
                MAKING HUMANITY MULTIPLANETARY
              </h2>
              <p className="mission_description1">
                SpaceX is working on a next generation of fully reusable launch
                vehicles that will be the most powerful ever built, capable of
                carrying humans to Mars and other destinations in the solar
                system.
              </p>
            </div>
          </div>
          <div className="mission_container2">
            <h1 className="mission_title2">OUR HISTORY</h1>
            {history.map((item) => (
              <div className="mission_subcontainer2" key={item.id}>
                <div className="mission_innercontainer2">
                  <p className="mission_date2 reveal">
                    {moment(item.event_date_utc).format("MMM DD yyyy")}
                  </p>
                  <h1 className="mission_subtitle2 reveal">{item.title}</h1>
                  <p className="mission_details2 reveal">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}

export default Mission;
