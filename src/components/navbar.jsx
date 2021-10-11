import React, { Component } from "react";

// Stateless Functional Component 

const Navbar = ({totalCounters}) =>{
  return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="btn btn-secondary btn-sm">{totalCounters}</span>
      </nav>
  );
}

export default Navbar;