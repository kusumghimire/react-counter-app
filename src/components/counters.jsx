import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component{
    render(){
        return(
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>
                Reset
            </button>
          {this.state.counters.map(counter => (
          <Counter 
          key={counter.id} 
          onDelete={this.handleDelete}
          onIncrement = {this.handleIncrement}
          counter = {counter} 
          />  //here value ,id are the parts of the props that can be access to another component
          ))}
        </div>);
    }
}

export default Counters;

// React Developers Tools 