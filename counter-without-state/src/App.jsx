import React from "react";
import "./App.css";

class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  setCount = (value) => {
    this.setState({ count: value });
  };

  render() {
    return (
      <div>
        <h1>No State</h1>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setCount(this.state.count + 1)}>+</button>
        <button onClick={() => this.setCount(0)}>RESET</button>
        <button onClick={() => this.setCount(this.state.count - 1)}>-</button>
      </div>
    );
  }
}

export default Counter;
