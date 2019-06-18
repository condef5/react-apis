import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import LeaflefMap from "./views/leaflef-map";
import GoogleMap from "./views/google-map";
import Header from "./components/header";
import "./main.css";

function App() {
  return (
    <main>
      <Router>
        <LeaflefMap path="/" />
        <GoogleMap path="/google-map" />
      </Router>
      <Header />
    </main>
  );
}

const $root = document.getElementById("root");

render(<App />, $root);
