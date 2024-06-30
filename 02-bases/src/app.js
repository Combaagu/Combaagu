// 01

// const { emailtemplate } = require('./js-foundation/01-template')
// console.log(emailtemplate)


// 02

// const { destructuring } = require('./js-foundation/02-destructuring')
// console.log(destructuring)


//03

// const { getUserById } = require('./js-foundation/03-callbacks')

// const id = 2

// getUserById(id, function (error, user) {
//     if (error) {
//         throw new Error(error)

//     }

//     // console.log(error)
//     console.log(user)
// })


// 04

// const { getUserById } = require('./js-foundation/04-arrowFunction')

// const id = 2

// getUserById(id, (error, user) => {
//     if (error) {
//         throw new Error(error)
//     }

//     // console.log(error)
//     console.log(user)
// })


// 05 -

// const { getUUID, getAge } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({ getAge, getUUID })

// const objeto = { name: 'chucha', birthdate: '1994/03/27' }

// const person = makePerson(objeto)

// console.log({ person })

// 06 -

// const { getUUID, getAge } = require('./plugins')

// const { getPokemonById } = require('./js-foundation/06-promises')

// console.log(getPokemonById(4)) // undefined

// getPokemonById(4)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Finalmente'))

// 07
//combined.log, error.log
// const { buildLogger } = require('./plugins')

// const logger = buildLogger('app.js')

// logger.log('Hola Mundo')
// logger.error('Esto es un error')