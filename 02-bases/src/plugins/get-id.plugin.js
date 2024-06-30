const { v4: uuidv4 } = require('uuid')

// mi version
// const getUUID = (id) => {

//     if (!id) {
//         throw new Error('Id no identificado')
//     }

//     return uuidv4(id)
// }


const getUUID = () => {

    return uuidv4();
}

module.exports = {
    getUUID,
}