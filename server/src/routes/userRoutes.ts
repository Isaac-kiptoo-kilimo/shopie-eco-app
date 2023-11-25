import { Router } from "express";
import { fetchAllUsers, registerUserControllers } from "../controllers/usersControllers";


const userRouter=Router()

userRouter.post('/register', registerUserControllers)
userRouter.get('/all', fetchAllUsers)


export default userRouter
