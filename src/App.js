import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
      </div>
    );
  }
}

export default App;
