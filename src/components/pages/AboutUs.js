import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { render } from "@testing-library/react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-content">This will be about page content</div>
    );
  }
}
