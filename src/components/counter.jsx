import React, { Component } from "react";

class Counter extends Component {
  componentUpdate (prevProps, prevState){
    console.log("PreProps", prevProps);
    console.log("PreProps", prevState);
    if (prevProps.counter.value !== this.props.counter.value){
      // Ajax call and get new data from the server
    }

  }
  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };


  // Handle input method is used to bind the method
  // Note: Functions in js are objects so they have properties and methods so here bind is used.
  // Instead of adding reassign function we can add arrow function
  // The component that owns a piece of the state, should be the one modifying it. 
  //Control component doesnt have its own propery it is owned by another componet like parent component

  render() {   
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={()=> this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
// Whenever need to pass arrow functions event handlers simply pass the body of the function and eventhandlers
  getBadgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;


// Note: react create new virtual DOM
// Every react have a property called props which is plain javascripts objects that includes all the plane attributes
