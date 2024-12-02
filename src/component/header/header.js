import { Component } from "react";

class Header extends Component {
  state = {
    myNumber: 1,
  };

  increment = () => {
    this.setState({ myNumber: this.state.myNumber + 1 });
  };

  decrement = () => {
    this.setState({ myNumber: this.state.myNumber - 1 });
  };

  render() {
    let nameColor = "green";
    let yearColor = "green";
    let cityColor = "green";

    if (this.state.myNumber < 5) {
      nameColor = "red";
    } else if (this.state.myNumber === 5) {
      yearColor = "blue";
    } else if (this.state.myNumber > 5) {
      cityColor = "orange";
    }

    return (
      <div>
        <h1>{this.state.myNumber}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <h1>
          My Name is <span style={{ color: nameColor }}>{this.props.myName}</span>
        </h1>
        <h1>
          My Year is <span style={{ color: yearColor }}>{this.props.Year}</span>
        </h1>
        <h1>
          My City is <span style={{ color: cityColor }}>{this.props.City}</span>
        </h1>
      </div>
    );
  }
}

export default Header;
