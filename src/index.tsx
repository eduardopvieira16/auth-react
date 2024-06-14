import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/resetGlobal.css";
import GlobalStyle from "./styles/styleGlobal";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
