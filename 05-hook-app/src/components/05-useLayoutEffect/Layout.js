import React from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote} = !!data && data[0];
    // si data es true entonces data[0]
    // !null = true, la negacion de null es true
    // !!null = false, la doble negacion es false
    // console.log(author, quote);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
            </blockquote>

            <button 
                className="btn btn-info"
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}
