import React, { Component } from "react";

class Home extends Component {
  render() {
    let nameColor = "green";
    let yearColor = "green";
    let cityColor = "green";

    if (this.props.myNumber < 5) {
      nameColor = "red";
    } else if (this.props.myNumber === 5) {
      yearColor = "blue";
    } else if (this.props.myNumber > 5) {
      cityColor = "orange";
    }

    return (
      <div>
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

export default Home;
