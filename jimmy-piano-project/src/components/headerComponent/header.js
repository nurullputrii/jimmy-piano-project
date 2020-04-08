import React, { Component } from "react";
import Logo from "../../../src/jcLogo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Homepage from "../pages/Homepage";

class Header extends Component {
  render() {
    return (
      // will be a navbar
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
        <Router>
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

            <Switch>
              <Route
                exact
                path="/Homepage"
                component={withRouter(Homepage)}
              ></Route>
              <Route path="/AboutUs" component={withRouter(AboutUs)}></Route>
            </Switch>
          </div>
        </Router>
      </nav>
    );
  }
}

export default Header;
