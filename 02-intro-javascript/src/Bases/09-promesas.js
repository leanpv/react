const { getHeroeById } = require("./Bases/08-imp-exp");

// const promesa = new Promise( (res, reject) => {
//     setTimeout(() => {
//         //res();
//         const heroe = getHeroeById(2);
//         // console.log(heroes);
//         res(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });



// promesa.then( heroes => {
//     console.log(heroes);
// })
// .catch( err => console.warn('error ', err) );

const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //res();
            const heroe = getHeroeById(id);

            if(heroe){
                resolve(heroe);
            } else {
                reject('No se encontró el heroe');
            }
            // console.log(heroes);
            
            // reject('No se pudo encontrar el heroe');
        }, 2000);
    });
  
    // return promesa;
};

getHeroeByIdAsync(3)
.then( console.log )
.catch( console.warn );