import React from "react";
import "./Mappy.css";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import Dashboard2 from "../dashboard/Dashboard2";

function Mappy() {
  return (
    <Dashboard2>
      <div className="mappy">
        <div className="notmapview">
          <SimpleBarReact style={{ maxHeight: "100vh" }} className="simple-bar">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </SimpleBarReact>
        </div>
        <div className="mapview">
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
    </Dashboard2>
    // <div className="mappy">
    //   <div className="notmapview">
    //     <SimpleBarReact style={{ maxHeight: "100vh" }} className="simple-bar">
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s, when an unknown printer took a galley of type
    //         and scrambled it to make a type specimen book. It has survived not
    //         only five centuries, but also the leap into electronic typesetting,
    //         remaining essentially unchanged. It was popularised in the 1960s
    //         with the release of Letraset sheets containing Lorem Ipsum passages,
    //         and more recently with desktop publishing software like Aldus
    //         PageMaker including versions of Lorem Ipsum.
    //       </p>
    //     </SimpleBarReact>
    //   </div>
    //   <div className="mapview">
    //     <Map center={[9.3068, 123.3054]} zoom={11}>
    //       <TileLayer
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //       />
    //       <Marker
    //         position={[9.3068, 123.3054]}
    //         onClick={() => {
    //           // setActivePark(true);
    //         }}
    //         // icon={pinIcon}
    //       >
    //         <Popup
    //           className="pin-popup"
    //           position={[9.3068, 123.3054]}
    //           onClose={() => {
    //             // setActivePark(null);
    //           }}
    //         >
    //           <div className="map-popup">
    //             <div className="img">
    //               <img
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ92eJBQ7-0OT4G1VfOigKvxHE3ITtOEy9Bpql5y9FEJkbFDFNR"
    //                 alt=""
    //               />
    //             </div>
    //             <div className="info">
    //               <ul className="popup-details">
    //                 <li>
    //                   <span className="title">Lorem Ipsum Dolor</span>
    //                 </li>
    //                 <li>Lorem Ipsum</li>
    //                 <li>11:17 AM</li>
    //                 <li>02/12/2020</li>
    //                 <li>Status: Not Solved</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </Popup>
    //       </Marker>
    //     </Map>
    //   </div>
    // </div>
  );
}

export default Mappy;
