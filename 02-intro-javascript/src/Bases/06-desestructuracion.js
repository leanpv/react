

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado'
};

// mediante desestructuracion extraemos con esta sintaxis
// la propiedad nombre de persona
// const {nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

// podemos insertar propiedades dentro de la desestructuracion por parametro
// siempre que la misma no esté definida
const useContext = ({clave, nombre, edad, rango = 'Capi'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.32132,
            lng: -12.23232
        }
    };
};

// desestructuracion anidada
const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios);

console.log( lat, lng );