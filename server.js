import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'

import { Connection } from "./database/db.js";
import userRouter from './routes/userRoute.js'
import DefaultData from "./default.js";

dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

Connection(MONGODB_URL);
// DefaultData();

app.get('/',(req,res)=>{
    res.send("hello server...")
    console.log("hello server...")
})
app.use('/user/',userRouter);




app.listen(PORT, ()=>{
    console.log("Listening to PORT: ",PORT)
})
