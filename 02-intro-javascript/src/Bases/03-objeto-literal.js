

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 555553,
        lat: 34.32312,
        lng: 12.32323
    }
};

console.log( {persona} );

const persona2 = {...persona};

persona2.nombre = 'carlos';

console.log( {persona} );
console.log( {persona2} );