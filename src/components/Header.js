import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  // The getDerivedStateFromProps method is called right before the render method
  // static getDerivedStateFromProps(props, state) {
  //   console.log('props', props);
  //   console.log('state', state);
  //   return { favoritecolor: props.favcol };
  // }

  // The componentDidMount() method is called after the component is rendered.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "blue" });
    }, 3000);
  }

  render() {
    return <h2>My Favorite Color is {this.state.favoritecolor}</h2>;
  }
}

export default Header; // Don’t forget to use export default!
