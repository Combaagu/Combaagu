// una funcion que crea una funcion


// const { getUUID } = require('../plugins/get-id.plugin')
// const { getAge } = require('../plugins/get-age.plugin')

// se cambian estas 2 lineas de importacion por un mejor control con index.js desde plugins

// const { getUUID, getAge } = require('../plugins/index')

// no hace falta colocar el index, porque por defecto VSC busca en archivo index.js

// const { getUUID, getAge } = require('../plugins')

//-------------------- factory funtion --------------- para no depender de las dependencias. ejemplo : const { getUUID, getAge } = require('../plugins')

// aca enviamos las dependecias mediante Argumentos, codigo legible
const buildMakePerson = ({ getAge, getUUID }) => {

    return ({ name, birthdate }) => {

        return {
            // id: new Date().getTime(),
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear(), // no es la forma correcta, es prueba
            age: getAge(birthdate),
        }

    }

}

// eran datos de prueba , ahora se exporta
// const objeto = { name: 'chucha', birthdate: '1994/03/27' }

// const persona = buildPerson(objeto)

// console.log(persona)

module.exports = {
    // buildPerson,
    buildMakePerson,

}