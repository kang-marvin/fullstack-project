import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";
import * as serviceWorker from "./serviceWorker";

import routes from "./routes";

import "semantic-ui-css/semantic.min.css";
import "./styles/index.css";

ReactDOM.render(
  <HttpsRedirect>
    <Router>{routes()}</Router>
  </HttpsRedirect>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
