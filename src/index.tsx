import React from "react";
import "./assets/style/main.scss";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
