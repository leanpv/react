
// function saludar(nombre){
const saludar = function(nombre){
    return `Hola, ${ nombre }`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log( saludar('Gohan'));
console.log( saludar2('Guku'));

const getUser = () => ({uid: 'abc', username: 'elpapi'});

console.log(getUser());

// ex
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC234',
        username: nombre
    };
}

const getUsuarioActivo2 = (nombre) => ({uid: '123abc', username: nombre});


const usuarioActivo = getUsuarioActivo('Leandro');
const usuarioActivo2 = getUsuarioActivo2('LeandroFlecha');

console.log(usuarioActivo);
console.log(usuarioActivo2);