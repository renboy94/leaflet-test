import React from "react";
import "./Dashboard.scss";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function Dashboard2(props) {
  return (
    <div className="main-container">
      <nav>
        <header>{/* <span>REEPORTR</span> */}</header>
        <SimpleBarReact className="simple-bar">
          <ul className="nav-location">
            <li>Current Location</li>
            <li>Lorem Ipsum, Dolor</li>
            <li>
              {" "}
              <div className="map-view">
                <Map center={[9.3068, 123.3054]} zoom={11}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker
                    position={[9.3068, 123.3054]}
                    onClick={() => {
                      // setActivePark(true);
                    }}
                    // icon={pinIcon}
                  >
                    <Popup
                      className="pin-popup"
                      position={[9.3068, 123.3054]}
                      onClose={() => {
                        // setActivePark(null);
                      }}
                    >
                      <div className="map-popup">
                        <div className="img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ92eJBQ7-0OT4G1VfOigKvxHE3ITtOEy9Bpql5y9FEJkbFDFNR"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <ul className="popup-details">
                            <li>
                              <span className="title">Lorem Ipsum Dolor</span>
                            </li>
                            <li>Lorem Ipsum</li>
                            <li>11:17 AM</li>
                            <li>02/12/2020</li>
                            <li>Status: Not Solved</li>
                          </ul>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                </Map>
              </div>
            </li>
            <li># of Reports in Location</li>
          </ul>
          <ul className="nav-menu">
            <li>Home</li>
            <li>Map</li>
            <li>My Profile</li>
            <li>My Reports</li>
          </ul>
        </SimpleBarReact>
      </nav>
      <main>
        <header className="main-header"></header>
        <div className="main-content-container">
          <div className="main-content">{props.children}</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard2;
