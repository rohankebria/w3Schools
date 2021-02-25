import React, { Component } from "react";
import "./App.css";
import stylesCSS from "./mystyle.module.css";

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
    //console.log(this, evnt); // this is binded inside constructor, no need for Arrow function
    console.log(
      //alert(

      msg +
        "---" +
        this +
        " type is: " +
        evnt.type +
        " React type is: " +
        evnt._reactName
    );
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
    const mystyle = {
      // call with single quote
      color: "purple",
      backgroundColor: "lightgreen",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div style={mystyle}>
        <h3
          onMouseOver={this.shoot.bind(this, "Great Binded Shoot")}
          className={stylesCSS.bigblue}
        >
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
    this.state = {
      location: "Sigtuna",
      username: "?",
      age: "?",
      errormessage: "",
      description: "The content of a textarea goes in the value attribute",
    };
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

  myChangeHandler = (event) => {
    console.log(event);
    let nam = event.target.name; // jsx elemt name
    let val = event.target.value; // jsx entered value
    let letters = /^[A-Za-z]+$/;
    let err = ""; //local error
    if (nam === "age") {
      if (!Number(val)) {
        //alert("Your age must be a number");
        err = <strong>Your age must be a number</strong>;
        val = 0; // age reset to zero !;
      }
    }

    if (nam === "username") {
      if (!val.match(letters)) {
        //  alert("Your username must be a String");
        err = <strong>Your username must be a String</strong>;
        val = "****"; // username reset to "" !;
      }
    }

    this.setState({ [nam]: val }); // object de-structuring
    this.setState({ errormessage: err });
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username + this.state.age);
  };

  render() {
    // console.log(this.props);
    const carname = "Volvo";
    const carinfo = { name: "Ford", model: "Mustang" };

    return (
      <div style={{ backgroundColor: "lightblue" }}>
        <h1>
          Who lives in my {this.state.location} {this.props.type} Garage?
        </h1>
        <Car color="blue" brand={carname} weAll={carinfo} />
        <button type="button" onClick={this.changeLocation}>
          <h1 style={{ color: "red", fontSize: "15px" }}> Change location </h1>
        </button>
        <form onSubmit={this.mySubmitHandler}>
          <h1>
            Hello {this.state.username} who is {this.state.age} years old
          </h1>
          <p>Enter your name:</p>
          <input name="username" type="text" onChange={this.myChangeHandler} />
          <p>Enter your age:</p>
          <input type="text" name="age" onChange={this.myChangeHandler} />
          <input type="submit" />
        </form>
        {this.state.errormessage}
        <textarea value={this.state.description} />
      </div>
    );
  }
}

export default Garage;
