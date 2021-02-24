import React, { Component } from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" }; // state is an object
  }
  render() {
    return (
      <h2>
        I am a {this.state.color} and {this.props.color} Car, named
        {" " + this.props.brand}! and my friends is{" "}
        {this.props.weAll.name + " " + this.props.weAll.model}
      </h2>
    );
  }
}
class Garage extends React.Component {
  constructor() {
    super();
    this.state = { location: "Sigtuna" };
  }
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
      </div>
    );
  }
}

export default Garage;
