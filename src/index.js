import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import LeaflefMap from "./views/leaflef-map";
import GoogleMap from "./views/google-map";
import Navbar from "./components/navbar";

function App() {
  return (
    <main>
      <Router>
        <LeaflefMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
      <Navbar />
    </main>
  );
}

const $root = document.getElementById("root");

render(<App />, $root);
