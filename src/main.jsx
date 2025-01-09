import React from "react";
import ReactDOM from "react-dom/client";
// import GitHubApp from "./components/GitHubApp/GitHubApp";
import App from "./components/App/App";
import "modern-normalize";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <GitHubApp /> */}
  </React.StrictMode>
);
