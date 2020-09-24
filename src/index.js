import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import HomePage from "./visual components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
