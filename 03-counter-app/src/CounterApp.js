import React, { useState } from 'react';
import PropTypes from 'prop-types';

// shortcut para crear automaticamente un FComp
// rfcp

const CounterApp = ({ value=10 }) => {

    const [estado, setEstado] = useState(0);

    const handleEstado = () => setCounter(counter+1)

    const [ counter, setCounter ] = useState(value); // [a,b()]

    // handleAdd
    // const handleAdd = () => setCounter( counter + 1);
    const handleAdd = () => setCounter( c => c + 1 );
    const handleSub = () => setCounter( c => c - 1 );
    const handleRes = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleEstado }>+X1</button>
            <button onClick={ handleRes }>Reset</button>
            <button onClick={ handleSub }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    saludo: PropTypes.number
}

export default CounterApp;

