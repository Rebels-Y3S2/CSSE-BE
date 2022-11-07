import mongoose from "mongoose";
import chalk from "chalk";
import { logger } from "./logger.js";
import { LoggerConstants } from "./constants/loggerConstants.js";
import Config from "./constants/config.js";

const db = mongoose.connection;

const warning = chalk.blue.bgMagenta.bold;
const info = chalk.blue.bgCyan.bold;
const errorMsg = chalk.blue.bgRed.bold;
const success = chalk.blue.bgGreen.bold;

/**
 * Creates the database connection to mongodb
 */
export const connect = () => {
  try {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
		db.on(Config.CONNECTED, () => logger.info(info(LoggerConstants.DB_CONNECTED)));
    db.on(Config.OPEN, () =>logger.info(success(LoggerConstants.DB_CONNECTION_SUCCESS)));
	} catch (error) {
		db.on(Config.ERROR, () => logger.error(errorMsg(LoggerConstants.DB_CONNECTION_FAILED)));
    db.on(Config.DISCONNECTED, () => logger.error(warning(LoggerConstants.DB_DISCONNECTED)));
	}
};

/**
 * Terminates the connection to mongodb
 * @param {*} done 
 */
export const disconnect = (done) => {
  mongoose.disconnect(done);
  logger.info(info(LoggerConstants.DB_DISCONNECTED))
};
