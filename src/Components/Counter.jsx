import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
  };

  handleOnClick = () => {
    console.log("Button Clicked");
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let classes = this.getBadgeClasses();

    return (
      <>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleOnClick}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
