import React, { Component } from "react";

// Stateless Functional Component 

const Navbar = (props) =>{
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="btn btn-secondary btn-sm">{props.totalCounters}</span>
      
      </nav>
    </React.Fragment>
  );
}

export default Navbar;