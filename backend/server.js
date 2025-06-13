import express from 'express';
import FoodRouter from './Routes/Foodrouter.js';
import userRouter from './Routes/Userroutes.js';
import dotenv from 'dotenv';
dotenv.config();

import {connectDB} from './config/database.js'
connectDB();
const app=express();

app.use(express.json());




//
app.use('/api/tomato/',FoodRouter)
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
  res.send("hello world");
})
//


app.listen(port,()=>{
   console.log("running on port ",process.env.PORT);
});

