import React, { Component } from "react";

class Car extends Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

export default Car; // Don’t forget to use export default!
