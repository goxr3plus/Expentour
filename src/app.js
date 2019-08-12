import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css"; //Reset all the default browser css
import "./styles/style.scss";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
