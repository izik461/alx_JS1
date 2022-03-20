import React from "react"; // - składnia JS Modules
// const React = require('react') - składnia Common.JS - wymusza type="module" w index.html
import ReactDOM from "react-dom";

import { App } from "./App/App";

ReactDOM.render(
  <App />, // == App(),
  // <div>Hello world from reactDom.render</div>, // jaki html wklejamy
  document.querySelector("#app") // i gdzie
);
