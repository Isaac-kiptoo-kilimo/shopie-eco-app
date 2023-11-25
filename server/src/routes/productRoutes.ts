import { Router } from "express";


const productRoute=Router()


productRoute.post('/create',()=>{
    console.log("The product has been created successfully");
    
})


export default productRoute