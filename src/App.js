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


//  This method is called after component is rendered into DOM
// When the component is mounted that means this component is in dom
// to use lifecycle hook ,, there must be class component

 componentDidMount(){
   console.log('app-mounted',)
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

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
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
          onDecrement = {this.handleDecrement}
          onDelete= {this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
// concetpually counter component is raising an evend called onDecrement and app component is handling this event using handleDecrement ie. the implementation of app is using props to pass funcitonal component
