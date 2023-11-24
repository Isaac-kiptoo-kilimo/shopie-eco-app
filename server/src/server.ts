import express, { json } from 'express';
import * as dotenv from 'dotenv';

const app=express();

dotenv.config();
app.use(json());

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`App is running on Port: ${port}`);
    
})