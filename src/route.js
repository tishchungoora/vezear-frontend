import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./component/App";
import Login from "./container/Login";

export default function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
