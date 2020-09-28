import React from "react";
import Home from "./pages/Home";
import History from "./pages/History";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/history" component={History} />
    </Switch>
  );
}

export default App;
