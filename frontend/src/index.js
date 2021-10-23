import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstrap.min.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
