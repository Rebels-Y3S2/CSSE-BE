import {createLogger, transports, format} from "winston"

export const logger = createLogger({
    format: format.printf((info) =>{
        return `[${info.level}] - ${info.message}`
    }),
    transports:[
        new transports.Console()
    ]
})
