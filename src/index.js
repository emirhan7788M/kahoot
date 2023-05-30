import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./firebase/signin";
import DataProvider from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        {" "}
        <SignIn />
      </Router>
    </DataProvider>
  </React.StrictMode>
);
reportWebVitals();
