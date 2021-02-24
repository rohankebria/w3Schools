import React from "react";
import ReactDOM from "react-dom";

const myelement = (
  <div>
    <h1>Hello React!</h1>
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  </div>
);

const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;
const myelement2 = <h1>Learning to React!</h1>;

/*class Car extends React.Component {
  render() {
    return <h2>Hi, I am a React Car!</h2>;
  }
}*/

function Car2() {
  return <h2>Hi, I am FUNCTIONAL a React Car!</h2>;
}

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" }; // state is an object
  }
  render() {
    return (
      <h2>
        I am a {this.state.color} and {this.props.color} Car!
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
    return (
      <div>
        <h1>
          Who lives in my {this.state.location} {this.props.type} Garage?
        </h1>
        <Car color="blue" />
      </div>
    );
  }
}

ReactDOM.render(<Garage type="Parking" />, document.getElementById("root"));
