// Utilizado para generar Logs en manejo masivo, es decir, de forma local o remota
// para manejar y conocer mejor los errores o vistas que necesitemos saber
// para no colocar muchos console.log() por todos lados

const winston = require('winston')
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
    ),
    // format: winston.format.json(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// para mostar el console.log() en Desarrollo, en produccion no
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

module.exports = function buildLogger(service) {

    return {
        // menmsaje y service(en que lugar y archivo se encuentra el error/problema, lugar especifico)
        log: (message) => {
            logger.log('info', { message, service })
        },
        error: (message) => {
            logger.error('error', {
                message,
                service
            })
        }
    }
}