import { Request,Response } from "express"
import { v4 } from 'uuid'
import bcrypt from 'bcrypt'
import mssql from 'mssql'
import { dbConfig } from "../config/db"
import { loginUserValidation, regUserValidation } from "../validators/validators"


export const registerUserControllers=async(req:Request, res:Response)=>{
try{
    const {fullName,email, password}=req.body
   

    const {error}=regUserValidation.validate(req.body)
    if(error){
        return res.status(404).json({
            message:"Check your username/password/email kindly",
            error:error.details
            
        })
    }

    const userID=v4()
    const hashedpwd = await bcrypt.hash(password, 5);
    const pool=await mssql.connect(dbConfig)


    
    const results= pool.request()
    .input('userID', mssql.VarChar , userID)
    .input('fullName', mssql.VarChar , fullName)
    .input('email', mssql.VarChar , email)
    .input('password', mssql.VarChar, hashedpwd)
    .execute('registerUser')

    return res.status(201).json({
        message: 'User registered successfully'
    })


}catch(error){
    return res.status(404).json({
        error: error,
        message:"Server error"
    })
}
}

export const loginUserControllers=async(req:Request,res:Response)=>{
try{
    const { email, password }=req.body

    const { error }=loginUserValidation.validate(req.body)

    if(error){ 
        return res.json({
            error:error.details
        })
     }

     const pool= await mssql.connect(dbConfig);
     const user=await(await pool.request().input('email', mssql.VarChar, email).input('password', mssql.VarChar, password).execute('loginUser')).recordset
     console.log(user);
     
     if(user[0]?.email==email){
        const correctPWD= await bcrypt.compare(password, user[0]?.password);

        if(!correctPWD){
            return res.status(404).json({
                error:"Incorrect Password"
            })
        }

     }

     

     return res.status(201).json({
        message:'User Logged in successfully'
     })
     


}catch(error){
    return res.json({
        error:error
    })
}
}


export const fetchAllUsers= async(req:Request,res:Response)=>{
    try{

        const pool= await mssql.connect(dbConfig);
        let users=(await pool.request().execute('getAllUsers')).recordset

        return res.status(201).json(users)

    }catch(error){
        return res.json({
            error:error
        })
    }
}