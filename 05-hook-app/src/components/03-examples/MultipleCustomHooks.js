import React from 'react';
import '../02-useEffect/effects.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];
    // si data es true entonces data[0]
    // !null = true, la negacion de null es true
    // !!null = false, la doble negacion es false
    // console.log(author, quote);

    return (
        <div>
            <h1>Breaking Bad Quotes!</h1>
            <hr />

            {loading?(
                <div className='alert alert-info text-center'>
                Loading...
                </div>
            ):(
            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            )}

            <button 
                className="btn btn-info"
                onClick={increment}
            >
                Siguiente quote
            </button>
        </div>
    )
}
