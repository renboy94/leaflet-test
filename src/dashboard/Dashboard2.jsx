import React from "react";
import "./Dashboard2.scss";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

function Dashboard2(props) {
  return (
    <div className="main-container">
      <nav>
        <header></header>
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
