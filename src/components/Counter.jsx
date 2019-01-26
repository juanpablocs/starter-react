import React from 'react';
import { connect } from 'react-redux';

const Component = ({ counter, increment }) => (
    <div>
        <h2>Counter {counter}</h2>
        <button onClick={() => increment()}>Up</button>
    </div>
)

export const Counter = connect(
    (state) => ({ counter: state.counter }),
    (dispatch) => ({ increment: () => dispatch({ type: 'INCREMENT' }) })
)(Component);
