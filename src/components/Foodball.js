import React, { Component } from "react";

class Football extends Component {
  shoot = (a, b) => {
    console.log("a", a);
    console.log("event", b);
    alert(b.type);
    /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
  };

  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }
}

export default Football;
