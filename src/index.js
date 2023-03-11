import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Openai from "./Openai";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Openai />
  </React.StrictMode>
);
