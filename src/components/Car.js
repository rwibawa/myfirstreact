import React, { Component } from "react";

class Car extends Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

export default Car; // Don’t forget to use export default!
