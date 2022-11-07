import express from "express";
import cors from "cors";
import ApiRouter from "../routes/index.js";
import { connect } from "./dbConnect.js";
import "dotenv/config";
import { logger } from "./logger.js";
import chalk from "chalk";

const portCon = chalk.blue.bgWhite.bold; // Color for logger console out

/**
 * This class was designed according to the Template design pattern and it is used to handle the
 * backend initialization of the web application.
 */

export default class InitializeBackend {
    /**
     * Default constructor for instantiating the class
     */
    InitializeBackend(){} // 
    
    App = null; // Initialize variable
    
    /**
     * This method contains the methods that will run when initializing the backend of the web-application.
     */
    initialization(){
        this.appInstance();
        this.parseJSON();
        this.enableCORS();
        this.defineRouter();
        this.establishConnection();
        this.listenHandler();
    }

    /**
     * This method creates an instance from express()
     */
    appInstance () {
        this.App = express();
    }

    /**
     * This method parses json format to express
     */
    parseJSON () {
        this.App.use(express.json());
    }

    /**
     * This method enables cross origin
     */
    enableCORS (){
        this.App.use(cors({origin: '*'}))
    }

    /**
     * This method initializes the Router to route the API calls
     */
    defineRouter (){
        this.App.use("/api", ApiRouter);
    }

    /**
     * This method calls the connect() method which calls the DB connection method in the dbConnect.js file
     */
    establishConnection (){
        connect();
    }

    /**
     * This method handles the port config to App instance with listen() method.
     */
    listenHandler(){
        const port = process.env.PORT || 3001;
        this.App.listen(port)
        logger.info(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`));
    }
}
