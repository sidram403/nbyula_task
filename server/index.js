import express from 'express'

import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/user.route.js'

const app = express();

app.use(express.json())




mongoose.connect("mongodb+srv://siddharthpatil9108:task123@cluster0.h8dfohh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>{
    console.log("Connected to db")
}).catch((err) =>{
    console.log(err);
})



app.use(cors())

app.use('/server/user', userRouter)


app.listen('3000' , () =>{
    console.log("Listening on port 3000...");
})