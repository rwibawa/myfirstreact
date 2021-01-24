import React, { Component } from "react";

class Car2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  // The componentWillUnmount method is called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    alert("The component named Car2 is about to be unmounted");
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Car2; // Don’t forget to use export default!
