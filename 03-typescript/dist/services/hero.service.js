"use strict";
// import { heroes } from '../data/hereos'
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroById = void 0;
const hereos_1 = require("../data/hereos");
const findHeroById = (id) => {
    return hereos_1.heroes.find((hero) => hero.id === id);
};
exports.findHeroById = findHeroById;
