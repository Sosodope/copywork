import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const SearchBar = props => {
  return (
    <React.Fragment>
      <input type="text" placeholder="Search React or type URL" />
    </React.Fragment>
  );
};

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <img src={logo} />
        <br />
        <SearchBar />
      </div>
    );
  }
}

export default Banner;
