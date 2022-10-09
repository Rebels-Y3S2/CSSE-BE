import "dotenv/config";
import express from "express";
import cors from "cors";
import {connect} from './utils/dbConnect.js';
import chalk from "chalk";
import ApiRouter from "./routes/index.js";

const portCon = chalk.blue.bgWhite.bold;

const App = express();
App.use(express.json());
App.use(cors({origin: '*'}));
App.use("/api", ApiRouter);

connect();

App.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 3001;
App.listen(port, console.log(portCon(`🚀 Server listening on PORT ${process.env.PORT} 🚀`)));

export default App;