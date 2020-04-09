import React, { Component } from "react";
import "./App.css";
import "./components/headerComponent/header";
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";

import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Homepage /> */}
        {/* <Router /> */}
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
