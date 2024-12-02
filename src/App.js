import React, { Component } from "react";
import Header from "./component/header/header";
import Home from "./component/home/home";
export default class App extends Component {
  state = {
    myName: "Nada",
    Year: "22",
    City: "Fayoum",
  };
  render() { 
    return (
      <div>
        <Header myName={this.state.myName} Year={this.state.Year} City={ this.state.City} />
        <Home />
      </div>
    );
  }
}