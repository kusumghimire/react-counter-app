import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component{
    state= {
        counters:[
            {id:1, value:4},   
            {id:1, value:0},   
            {id:1, value:0},   
            {id:1, value:0},   
        ]
    }
    render(){
        return(
        <div>
          {this.state.counters.map(counter => (
          <Counter key={counter.id} value= {counter.value} id={counter.id} />  //here value ,id are the parts of the props that can be access to another component
          ))}
        </div>);
    }
}

export default Counters;

// React Developers Tools 