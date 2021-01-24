import React, { Component } from "react";
import Car from "components/Car";
import Car2 from "components/Car2";

class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delCar2 = () => {
    this.setState({ show: false });
  };

  render() {
    const carinfo = { name: "Ford", model: "Mustang" };

    let myCar2;
    if (this.state.show) {
      myCar2 = <Car2 />;
    }

    return (
      <div className="garage">
        <h1>Who lives in my garage?</h1>
        <Car brand={carinfo} />
        <br></br>
        {myCar2}
        <button type="button" onClick={this.delCar2}>
          Delete Car2
        </button>
      </div>
    );
  }
}

export default Garage;
