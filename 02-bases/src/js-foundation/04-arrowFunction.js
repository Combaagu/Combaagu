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



const getUserById = (id , callback) =>  {

    const user = users.find( (user) => user.id === id )// busca al user = al id , eliminando el return con arrow Function
    
    if (!user) {
        return callback(`usuario no encontrado ${id}`)
    }
    
    return callback(null, user)
}



module.exports = {
    getUserById,
}