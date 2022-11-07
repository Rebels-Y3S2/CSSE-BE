import mongoose from "mongoose";
import chalk from "chalk";
import { logger } from "./logger.js";

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
		db.on("connected", () => logger.info(info("Connected to the database!😎😊😇")));
    db.on("open", () =>logger.info(success("DB connection successful!😁😗🤪")));
	} catch (error) {
		db.on("error", () => logger.error(errorMsg("DB connection failed!😡😖🤬")));
    db.on("diconnected", () => logger.error(warning("Database disconnected!😥😔🤫")));
	}
};

/**
 * Terminates the connection to mongodb
 * @param {*} done 
 */
export const disconnect = (done) => {
  mongoose.disconnect(done);
  logger.info(info("Disconnected from the database!😎😊😇"))
};
