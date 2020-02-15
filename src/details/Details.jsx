import React, { useState, useEffect } from "react";
import "./DetailsPage.scss";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import { db, auth } from "../../firebase/firebase.utils";

import Dashboard from "../dashboard/Dashboard";

function DetailsPage() {
  const [activePark, setActivePark] = React.useState(null);
  const [pins, setPins] = React.useState([
    [9.2392, 123.2644],
    [9.3508, 123.1576],
    [9.1991, 123.2363]
  ]);

  const pinIcon = new Icon({
    iconUrl: "/pin.svg",
    iconSize: [40, 40]
  });

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = () => {
    db.collection("reeportr_post")
      .get()
      .then(snapshot => {
        const dbReports = [];
        //   snapshot.forEach(doc => {
        //     const data = doc.data();
        //     dbusers.push(Object.assign({ id: doc.id }, data));
        //     console.log(doc.id);
        //   });
        //   setUsers(dbusers);
        //   console.log(dbusers);
        // console.log(snapshot);
        snapshot.forEach(doc => {
          //   console.log(doc.data());
          const data = doc.data();
          dbReports.push(Object.assign({ id: doc.id }, data));
        });
        setReports(dbReports);
      })
      .catch(error => console.log(error));
  };

  return (
    <Dashboard>
      <div className="details-wrapper">
        <div className="report-details">
          <SimpleBarReact style={{ maxHeight: "100vh" }} className="simple-bar">
            <div className="reports-post">
              <div className="reports-post-votes">
                <ul>
                  <li>
                    <button>
                      <img src="https://img.icons8.com/ios-filled/25/000000/circled-up-2.png" />
                    </button>
                  </li>
                  <li>
                    <span>0</span>
                  </li>
                  <li>
                    <button>
                      <img src="https://img.icons8.com/ios-filled/25/000000/circled-down-2.png" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="reports-post-details">
                <div className="user-info">
                  <ul>
                    <li>
                      <img src="https://img.icons8.com/material/60/000000/user-male-circle--v1.png" />
                    </li>
                    <li>
                      <span>Username123</span>
                    </li>
                    <li>
                      <span>1h</span>
                    </li>
                    <li>
                      <span>Lorem ipsum, dolor</span>
                    </li>
                  </ul>
                  <div className="control-icon">
                    <img src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" />
                  </div>
                </div>
                <div className="post-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="post-image">
                  <img
                    src="https://assets.change.org/photos/3/nk/lw/NKnkLwqYmVcujea-800x450-noPad.jpg?1541490087"
                    alt=""
                  />
                </div>
                <div className="post-interactivity">
                  <ul>
                    <li>
                      <div>
                        <img src="https://img.icons8.com/ios-filled/20/000000/tags.png" />
                        <span>&nbsp;tags</span>
                      </div>
                    </li>
                    <li>0 points</li>
                    <li>
                      <div>
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/comments.png" />
                        <span>&nbsp;0</span>
                        <span>&nbsp;comments</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="https://img.icons8.com/ios-filled/20/000000/share-3.png" />
                        <span>&nbsp;share</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="comment-view">
              <div className="comment-name">
                Comment as <span>Username123</span>
              </div>
              <div className="comment-box">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="comment-interactivity">
                <ul className="attachments">
                  <li>Camera</li>
                  <li>Photo</li>
                  <li>File</li>
                </ul>
                <button>Comment</button>
              </div>
            </div>
          </SimpleBarReact>
        </div>
        {/* <SimpleBarReact className="report-details">
          <div className="comment-view">comment</div>
        </SimpleBarReact> */}
        <div className="report-map">
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
      </div>
    </Dashboard>
  );
}

export default DetailsPage;
