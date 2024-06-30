// funciones de retorno

const users = [
    {
        id: 1,
        nombre: 'chucha'
    },
    {
        id: 2,
        nombre: 'piman'
    }
]

function getUserById(id, callback) {

    const user = users.find(function (user) {
        return user.id === id
    })// busca al user = al id 

    if (!user) {
        return callback(`usuario no encontrado ${id}`)
    }

    return callback(null, user)

}

module.exports = {
    getUserById,
}