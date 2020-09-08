import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <>
        <h4>Hello World</h4>
        <button>Increment</button>
      </>
    );
  }
}

export default Counter;
