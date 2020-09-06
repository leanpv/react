import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#app');

// console.log(divRoot);

ReactDOM.render( <CounterApp />, divRoot );   