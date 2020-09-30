import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./providers/ContextProvider";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
