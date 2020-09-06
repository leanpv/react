// import { heroes } from './data/heroes';
import heroes from '../data/heroes';

// import {heroes, owners} from './data/heroes';
// const { heroes } = require("./data/heroes");

// console.log(...heroes);


export const getHeroeById = (id) => heroes.find( res => res.id === id );

export const getHeroesOwner = ( owner ) => heroes.filter( res => res.owner === owner );

// console.log(getHeroeById(2));

// console.log(getHeroesOwner('DC'));



 