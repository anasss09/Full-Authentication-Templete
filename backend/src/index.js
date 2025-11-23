import express, { urlencoded } from "express";
import mongoose from "mongoose";
import CookieParser from "cookie-parser";
import cors from 'cors'

import authRouter from './routes/auth.routes.js';
import { verifyJWT } from "./middleware/verifyJWT.js";

const app = express()
const PORT = process.env.PORT;

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(CookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.get('/', (req,res) => {
    res.send("Yes this is working")
})

app.use('/api/auth', authRouter);


mongoose.connect('mongodb://127.0.0.1:27017/TodoList').then(() => {
    app.listen(PORT, () => {
        console.log('http://localhost:'+PORT)
    })
})

