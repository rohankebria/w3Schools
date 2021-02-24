import React, { Component } from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "KIA",
      model: "Ceed",
      color: "red",
      year: 1964,
    }; // state is an object
  }

  changeColor = () => {
    this.setState({ model: "Rio" });
  };

  render() {
    return (
      <div>
        <h3>
          I am a {this.state.color} and {this.props.color} Car, named
          {" " + this.props.brand}! and my friends are{" "}
          {this.props.weAll.name + " " + this.props.weAll.model} and{" "}
          {this.state.brand}
          {" " + this.state.model}
        </h3>
        <button type="button" onClick={this.changeColor}>
          <h1> Change model </h1>
        </button>
      </div>
    );
  }
}
class Garage extends React.Component {
  constructor() {
    super();
    this.state = { location: "Sigtuna" };
  }

  changeLocation = () => {
    this.setState({ location: "Märsta" });
  };

  render() {
    // console.log(this.props);
    const carname = "Volvo";
    const carinfo = { name: "Ford", model: "Mustang" };

    return (
      <div>
        <h1>
          Who lives in my {this.state.location} {this.props.type} Garage?
        </h1>
        <Car color="blue" brand={carname} weAll={carinfo} />
        <button type="button" onClick={this.changeLocation}>
          <h1> Change location </h1>
        </button>
      </div>
    );
  }
}

export default Garage;
