import React from "react";
import App from "App/App";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "assets/styles/global.scss";
import "./translator/i18n";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
