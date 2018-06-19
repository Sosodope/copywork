import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Input } from "react-materialize";

const SearchBar = props => {
  return (
    <React.Fragment>
      <Row>
        <Input type="text" placeholder="Search here or type URL" />
      </Row>
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
