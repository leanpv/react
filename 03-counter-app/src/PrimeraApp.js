import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';
// UpperCamelCase
// componentes en base a funciones o clases

const PrimeraApp = ({ saludo, subtitulo }) => {
    // return <h1>Hola Mundo</h1>;

    // const saludo = 'Hola Mundo';
    // const saludo = 123;
    // const saludo = true;
    // const saludo = [1,2,3,4];
    // const saludo = {
    //     nombre: 'Lean',
    //     edad: '27'
    // };
    // console.log(props)


    return (
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;