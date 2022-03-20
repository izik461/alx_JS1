import React from "react"; // - składnia JS Modules
// const React = require('react') - składnia Common.JS - wymusza type="module" w index.html
import ReactDOM from "react-dom";

alert("Hello world from index.js");

ReactDOM.render(<div>Hello world from reactDom.render</div>, document.querySelector("#app"));
