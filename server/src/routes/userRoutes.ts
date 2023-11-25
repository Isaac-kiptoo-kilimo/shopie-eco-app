import { Router } from "express";


const userRouter=Router()

userRouter.post('/register',()=>{
    console.log("Registered successfully");
    
})


export default userRouter
