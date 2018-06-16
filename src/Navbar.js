import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Navbar extends Component {
  render() {
    const style = {
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-end"
    };
    return (
      <header className="nav">
        <ul style={style}>
          <li>Remail</li>
          <li>ReImages</li>
          <li>ReApps</li>
          <li>ReNotifications</li>
          <li>ReAccount</li>
        </ul>
      </header>
    );
  }
}

export default Navbar;
