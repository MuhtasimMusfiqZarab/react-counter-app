import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter"; //Counter is default export .. so no need to use curly braces around it

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
