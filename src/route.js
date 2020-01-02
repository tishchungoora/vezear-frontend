import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./component/App";
import Login from "./container/Login";
import Products from "./container/Products";
import UserInfo from "./container/UserInfo";
import Questions from "./container/Questions";
import Recommendation from "./container/Recommendation";

export default function AppRoute() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vezear
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/user">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/questions">
                Start
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/user">
          <UserInfo />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/recommendation">
          <Products />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
