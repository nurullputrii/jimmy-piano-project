import React, { Component } from "react";
import "./App.css";
import "./components/headerComponent/header";
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
