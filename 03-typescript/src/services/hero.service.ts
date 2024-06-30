// import { heroes } from '../data/hereos'

import {heroes} from '../data/hereos';

export const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id)
}

