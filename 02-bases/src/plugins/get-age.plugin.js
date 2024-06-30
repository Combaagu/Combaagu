//PATRON ADAPTADORS

// para tener un codigo legible y poder mantener el codigo con respecto a las dependencias de tercero, es decir, para una Actualizacion o cambio de codigo del mismo y no tener demasiados problemas

// ejmpleo uuid = Id para cualquier persona o registro diferentes para todos, por mas que sea en el mismo momento y mismo segundo, asi no se repite el mismo Id para las 2 personas o get-Age


const getAgePlugin = require('get-age')

const getAge = (birthdate) => {
    if(!birthdate) {
        return new Error ('Error, el campo es olbigatorio')
    }

    return getAgePlugin(birthdate)
}


module.exports = {
    getAge,
}