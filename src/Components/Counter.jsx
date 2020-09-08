import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";

    return (
      <>
        <span className={classes}>{this.formatCount()}</span>
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
