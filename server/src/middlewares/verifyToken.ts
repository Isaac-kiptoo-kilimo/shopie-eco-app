import { User } from "../types/interface";
import {Request, Response, NextFunction } from 'express'


export interface ExtendeUser extends Request{

    info?:User
}

export const VerifyToken=(req:ExtendeUser, res:Response, next:NextFunction )=>{
    try{

        const token=req.headers['token'] as string

        
    }catch(error){
        return res
    }
}