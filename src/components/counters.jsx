import React, { Component } from 'react'
import Counter from './counter';
class Counters extends Component{
    render(){
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return(
        <div>
            <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
                Reset
            </button>
            {counters.map(counter => (
            <Counter 
            key={counter.id} 
            onDelete={onDelete}
            onIncrement = {onIncrement}
            onDecrement = {onDecrement}
            counter = {counter} 
            />  //here value ,id are the parts of the props that can be access to another component
            ))}
        </div>);
    }
}

export default Counters;

// React Developers Tools 
// Lifecycle hooks : mount, update, unmount