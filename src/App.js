import React, { Component } from "react";
import Header from "./component/header/header";
import Home from "./component/home/home";

export default class App extends Component {
  state = {
    myNumber: 1,
    myName: "Nada",
    Year: "22",
    City: "Fayoum",
  };

  increment = () => {
    this.setState({ myNumber: this.state.myNumber + 1 });
  };

  decrement = () => {
    this.setState({ myNumber: this.state.myNumber - 1 });
  };

  render() {
    return (
      <div>
        <Header
          myNumber={this.state.myNumber}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Home
          myNumber={this.state.myNumber}
          myName={this.state.myName}
          Year={this.state.Year}
          City={this.state.City}
        />
      </div>
    );
  }
}
