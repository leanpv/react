// Arrays
// const arreglo = new Array(5);
const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( resp => resp * 2 );
const arreglo4 = arreglo2.map( function(name){
    return name*2;
} );

// arreglo2.push(5);

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );