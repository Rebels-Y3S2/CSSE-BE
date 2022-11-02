import "dotenv/config";
import express from "express";
import cors from "cors";
import {connect} from './utils/dbConnect.js';
import chalk from "chalk";
import ApiRouter from "./routes/index.js";
import { logger } from "./utils/logger.js";

const portCon = chalk.blue.bgWhite.bold;

// Creates an express app instance
const App = express();

App.use(express.json()); // Parses json
App.use(cors({origin: '*'})); // Enable cors
App.use("/api", ApiRouter); // Define initial router

connect(); // Establish Database connection

const port = process.env.PORT || 3001;
App.listen(port);
logger.info(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`));

export default App;