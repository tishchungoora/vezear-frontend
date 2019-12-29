import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./component/App";
import Login from "./container/Login";
import UserInfo from "./container/UserInfo";

export default function AppRoute() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Vezear
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Businesses
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/">
                Questions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <UserInfo />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
