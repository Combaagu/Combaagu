"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.findHeroById)(2);
console.log(hero);
console.log(hero?.name ?? 'no tiene nombre'); //en Typescript es importante el ? para verificiar que no sea null o undefined 
