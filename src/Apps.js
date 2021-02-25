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

    //this.shoot = this.shoot.bind(this);
  }

  shoot(msg, evnt) {
    // event handler
    console.log(this, evnt); // this is binded inside constructor, no need for Arrow function
    alert(msg + "---" + this + " type is: " + evnt.type);
  }

  changeModel = () => {
    this.setState({ model: "Rio" });
  };
  /* shouldComponentUpdate() {
    return false;
  } */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.model;
    return null;
  }
  componentDidUpdate(pProps, pState) {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.model;
    console.log(pProps, pState);
  }
  render() {
    return (
      <div>
        <h3 onMouseOver={this.shoot.bind(this, "Great Binded Shoot")}>
          I am a {this.state.color} and {this.props.color} Car, named
          {" " + this.props.brand}! and my friends are{" "}
          {this.props.weAll.name + " " + this.props.weAll.model} and{" "}
          {this.state.brand}
          {" " + this.state.model}
        </h3>
        <button type="button" onClick={this.changeModel}>
          <h1> Change model </h1>
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({ location: "Norrbackavägen" });
    }, 1000);
  }

  /*shouldComponentUpdate() {
    return false;
  } */
  /* static getDerivedStateFromProps(props, state) {
    return { location: "Sweden" };
  }*/

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
