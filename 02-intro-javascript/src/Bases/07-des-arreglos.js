
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [,,p3] = personajes;

// console.log(p3);

const retornaArreglo = () => {
    return ['ACB', 123];
}

const [letras, numeros] = retornaArreglo();

// console.log(letras, numeros)

//ex
const useState = (valor) => {
    return [ valor, ()=>{ console.log('hola mundo'); } ];
};

const arr = useState('Goku');
// console.log(arr);
// arr[1]();

const [nombre, setNombre] = useState('goku');
console.log(nombre);
setNombre();