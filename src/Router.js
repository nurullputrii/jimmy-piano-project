import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "./components/pages/Homepage";
import AboutUsPage from "./components/pages/AboutUs";
import Logo from "./jcLogo.png";

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img className="Logo" src={Logo} alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
                <Link to="/Homepage" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">
                  About Us
                </a> */}
                <Link to="/AboutUs" className="nav-link">
                  About Us
                </Link>
              </li>
              {/* dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Collection
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Music
                  </a>
                  <a className="dropdown-item" href="#">
                    Gallery
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Payment Method
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/AboutUs">
            <AboutUsPage />
          </Route>
        </Switch>
      </Router>

      //   <Router>
      //     <div>
      //       <ul>
      //         <li>
      //           <Link to="/">Home</Link>
      //         </li>
      //         <li>
      //           <Link to="/about">About</Link>
      //         </li>
      //       </ul>

      //       <hr />

      //       {/*
      //           A <Switch> looks through all its children <Route>
      //           elements and renders the first one whose path
      //           matches the current URL. Use a <Switch> any time
      //           you have multiple routes, but you want only one
      //           of them to render at a time
      //         */}
      //       <Switch>
      //         <Route exact path="/">
      //           <HomePage />
      //         </Route>
      //         <Route path="/about">
      //           <AboutUsPage />
      //         </Route>
      //       </Switch>
      //     </div>
      //   </Router>
    );
  }
}
