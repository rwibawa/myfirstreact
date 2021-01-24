import React, { Component } from "react";
import Car from "components/Car";
import Car2 from "components/Car2";

class Garage extends Component {
  render() {
    const carinfo = { name: "Ford", model: "Mustang" };
    return (
      <div className="garage">
        <h1>Who lives in my garage?</h1>
        <Car brand={carinfo} />
        <br></br>
        <Car2 />
      </div>
    );
  }
}

export default Garage;
