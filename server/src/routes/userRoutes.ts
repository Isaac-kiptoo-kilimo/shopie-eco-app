import { Router } from "express";
import { checkCredentials, deleteUserController, fetchAllUsersControllers, getSingleUserController, getUserDetails, loginUserControllers, registerUserControllers, updateUserControllers } from "../controllers/usersControllers";
import { verifyToken } from "../middlewares/verifyToken";


const userRouter=Router()

userRouter.post('/register', registerUserControllers)
userRouter.post('/login', loginUserControllers)
userRouter.put('/update/:userID', updateUserControllers)
userRouter.get('/userDetails',verifyToken, getUserDetails)
userRouter.get('/all', fetchAllUsersControllers)
userRouter.get('/checkUserDetails', verifyToken, checkCredentials);
userRouter.get('/singleUser/:userID',verifyToken,getSingleUserController)
userRouter.delete('/delete/:userID',deleteUserController)


export default userRouter
