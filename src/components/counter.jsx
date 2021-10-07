import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };
   
  constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  // Handle input method is used to bind the method
// Note: Functions in js are objects so they have properties and methods so here bind is used.
// Instead of adding reassign function we can add arrow function
  handleIncrement(){
    console.log('Increment Clicked');
  }

  render() {

    return (
      <div>
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

      </div>
    );
  }

  getBadgeClasses(){
    let classes = "btn m-2 btn-";
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
