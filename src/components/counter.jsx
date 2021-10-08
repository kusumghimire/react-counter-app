import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  handleIncrement = product => {
    console.log(product)
    this.setState({count: this.state.count +1});
  }
  // Handle input method is used to bind the method
  // Note: Functions in js are objects so they have properties and methods so here bind is used.
  // Instead of adding reassign function we can add arrow function
  // The component that owns a piece of the state, should be the one modifying it. 

  doHandleIncrement =() =>{
    this.handleIncrement({id:1});
  }

  render() {
   
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
// Whenever need to pass arrow functions event handlers simply pass the body of the function and eventhandlers
  getBadgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;


// Note: react create new virtual DOM
// Every react have a property called props which is plain javascripts objects that includes all the plane attributes
