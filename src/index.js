import React from "react";
import App from "App/App";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/styles/global.scss";
import "./translator/i18n";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Router>
      <App />
    </Router>,
    rootElement
  );
} else {
  render(
    <Router>
      <App />
    </Router>,
    rootElement
  );
}
