import { Router } from "express";
import { AddProduct, deleteProduct, fetchAllProductsControllers } from "../controllers/productControllers";


const productRoute=Router()


productRoute.post('/create', AddProduct)

productRoute.get('/all', fetchAllProductsControllers)
productRoute.delete('/delete/:ProductID', deleteProduct);



export default productRoute