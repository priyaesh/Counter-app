import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleOnClick = (value) => {
    console.log("Button Clicked");
    this.setState({ value: this.state.value + value });
  };
  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleOnClick(5)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
