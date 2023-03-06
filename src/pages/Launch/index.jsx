import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Launch() {
  const [launch, setLaunch] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    window.scrollTo(0, 0);
    const getLaunch = async () => {
      try {
        const res = await axios.get(
          "https://api.spacexdata.com/v3/launches/" + path
        );
        setLaunch(res.data);
        setLoading(true);
      } catch (err) {
        alert("Something went ");
      }
    };
    getLaunch();
  }, []);

  return (
    <>
      {loading ? (
        <div className="launch">
          <div className="launch_container1">
            <div className="launch_subcontainer1">
              <div className="launch_backContainer">
                <div className="launch_back">
                  <Link to={-1}>Back to Launches</Link>
                </div>
              </div>
              <iframe
                className="launch_video"
                src={`https://www.youtube-nocookie.com/embed/${
                  launch.links && launch.links.youtube_id
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="launch_container2">
            <div className="launch_subcontainer2">
              <h3 className="launch_date">
                {moment(launch.launch_date_utc).format("MMM DD yyyy")}
              </h3>
              <h1 className="launch_title">{launch.mission_name}</h1>
              <p className="launch_description">
                Launched at the{" "}
                {launch.launch_site && launch.launch_site.site_name_long}
              </p>
              <p className="launch_description">{launch.details}</p>
              {launch.rocket ? (
                <></>
              ) : (
                <p className="launch_description">
                  The {launch.rocket && launch.rocket.launch_name} type{" "}
                  {launch.launch && launch.launch.launch_type} was launch in
                  this mission.
                </p>
              )}
            </div>
            <div className="launch_imageContainer">
              {launch.links &&
                launch.links.flickr_images
                  .map((item) => (
                    <img
                      src={item}
                      alt=" "
                      className="launch_image"
                      key={item}
                    />
                  ))
                  .splice(0, 5)}
            </div>
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

export default Launch;
