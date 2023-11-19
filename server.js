import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from "./db.js";
import bodyParser from 'body-parser';
import { AuthRouter } from './middleware/login.middleware.js';
import { ErrorHandler } from './erroTracker/login.error.js';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(AuthRouter);
app.use(ErrorHandler);

const port = process.env.PORT_NUMBER
db.query(`
SELECT 1
`)
.then(data => { 
    app.listen(port, (req,res) => {
        console.log(`server listening at http://localhost:${port}`);
    })
})
.catch(err => console.log('db connection error\n'+err));

