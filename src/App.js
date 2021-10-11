import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

 constructor (){
   super();
   console.log('App - Constructor',this.props);
  //  this.state 
 }


//  This method is called when the dom is referred  and
// WHhen the component is mounted that means this component is in dom
 componentDidMount(){
   console.log('app=mount',)
  //  Ajax call
  // this.setState({movies});

 }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value >0).length } />
        <main className="container">
          <Counters 
          counters= {this.state.counters}
          onReset ={this.handleReset} 
          onIncrement = {this.handleIncrement}
          onDelete= {this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
