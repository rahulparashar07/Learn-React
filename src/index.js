import React from "react";
import ReactDOM from "react-dom";
import Abject from './Context'
import App from "./App";

ReactDOM.render(<Abject.contextProvider><App /></Abject.contextProvider>, document.getElementById("root"));
