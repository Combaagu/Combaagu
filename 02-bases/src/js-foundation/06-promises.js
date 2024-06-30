//-----------------------------
// const getPokemonById = (id) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     // console.log({url})

//     fetch(url)
//         .then((data) => {
//             // console.log({data})

//             data.json()
//                 .then((pokemon) => {
//                     console.log( pokemon.name)
//                     console.log( pokemon.moves[1])

//                 })
//         });
// }

// module.exports = {
//     getPokemonById,
// }


// otro promises con http-clientPlugins-----------------------------

// const { httpClientPlugin} = require('../plugins')


// const getPokemonById = async (id) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const pokemon = await httpClientPlugin.get(url)

//     console.log(pokemon)
// }

// module.exports = {
//     getPokemonById,
// }


// AXIOS -----------------------------

const { httpClientPlugin } = require('../plugins')


const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url)

    console.log(pokemon.name)
    // console.log(pokemon.moves[3])

}

module.exports = {
    getPokemonById,
}