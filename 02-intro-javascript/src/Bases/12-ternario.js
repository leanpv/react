

const activo = true;

let mensaje = '';

if( !activo ){
    mensaje = 'Activo';
} else {
    mensaje = 'inactivo';
}

const mensaje2 = ( activo ? 'activo' : 'inactivo' );
const mensaje3 = !activo && 'activo';

console.log(mensaje);