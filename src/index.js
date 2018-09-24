import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//eslint-disable-next-line
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters"; //Counter is default export .. so no need to use curly braces around it

ReactDOM.render(<Counters />, document.getElementById("root"));
registerServiceWorker();
