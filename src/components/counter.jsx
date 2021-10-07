import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  render() {
   let classes = "btn m-2 btn-";
   classes += this.state.count === 0 ? 'warning' : 'primary';

    return (
      <div>
        <span className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
