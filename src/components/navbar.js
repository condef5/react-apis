import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <navbar>
      <ul>
        <li>
          <Link to="/">Leaflet</Link>
        </li>
        <li>
          <Link to="/google-map">Google Map</Link>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
