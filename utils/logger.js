import {createLogger, transports, format} from "winston"

/**
 * Creates the logger format with the help of createLogger() method in winston
 */
export const logger = createLogger({
    format: format.printf((info) =>{
        return `[${info.level}] - ${info.message}` // Returns the message
    }),
    transports:[
        new transports.Console()
    ]
})
