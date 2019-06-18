import React from "react";
import { Link } from "@reach/router";

function ActiveLink(props) {
  function getProps({ isCurrent }) {
    return {
      className: isCurrent ? "active" : ""
    };
  }

  return <Link {...props} getProps={getProps} />;
}

function Header() {
  return (
    <header>
      <ul>
        <li>
          <ActiveLink to="/">Leaflet</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/google-map">Google Map</ActiveLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
