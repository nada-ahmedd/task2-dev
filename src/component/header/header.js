import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.myNumber}</h1>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}

export default Header;
