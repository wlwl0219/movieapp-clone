import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Todo from "./Todo";
import Coin from "./Coin";
import Movies from "./Movies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>
);
