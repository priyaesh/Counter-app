import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
  };
  render() {
    return (
      <>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
