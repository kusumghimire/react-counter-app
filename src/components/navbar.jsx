import React from "react";

//This is called Stateless Functional Component 
// We cannot use recycle hooks in the functional component of stateless component

const Navbar = ({totalCounters}) =>{
  return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="btn btn-secondary btn-sm">{totalCounters}</span>
      </nav>
  );
}

export default Navbar;