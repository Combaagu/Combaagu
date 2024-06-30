import { findHeroById } from "./services/hero.service";

const hero = findHeroById(2);

console.log(hero)
console.log(hero?.name ?? 'no tiene nombre') //en Typescript es importante el ? para verificiar que no sea null o undefined 