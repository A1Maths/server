import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();
import {router as loginRoute } from './routes/login.js';


//express app
const port = process.env.PORT;
const host = process.env.HOST;
const app = express();


//middleware
app.use(express.json())

//routes
app.use(`/`, loginRoute);


//connecting to DB
const main = async() => {
    console.log(`Connecting to DB @ ${host}`);
    await mongoose.connect(host);
}

//listening for requests
main()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on port on ${port}`)
        })
    })
    .catch(error => console.log(error));

    