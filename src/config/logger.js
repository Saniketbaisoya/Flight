const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const formatMessage = printf(({ level,message,timestamp}) =>{
    return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
    format : combine(
        label({label : 'flight=booking-server'}),
        timestamp({ format : 'YYYY-MM-DD HH:mm:ss'}),
        formatMessage
    ),
    transports : [
        new transports.Console(),
        new transports.File({filename : 'Combined.log'})
    ]
});

module.exports = {logger};