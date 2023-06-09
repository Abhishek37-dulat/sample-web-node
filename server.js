import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'


import { Connection } from "./database/db.js";
import userRouter from './routes/userRoute.js'

dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

Connection(MONGODB_URL);


app.use('/',userRouter);




app.listen(PORT)
