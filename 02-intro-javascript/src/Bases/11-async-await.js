

// const getImgPromesa = () => new Promise( resolve => resolve('https://asdadsadasd.com') );

const getImage = async() => {

    try {
        const apiKey = 'zZ9IcERTCDW49arGXT0Ws1b7nmgnzer9';
        // await hace que termine de ejecutarse esa misma linea de codigo
        // antes de continuar con las demas
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.erorr(error);
    }

};

getImage();
// console.log( getImage() );


// const apiKey = 'zZ9IcERTCDW49arGXT0Ws1b7nmgnzer9';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then( resp => resp.json())
//     .then( ({data}) => {
//         const {url} = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch( console.warn ); 