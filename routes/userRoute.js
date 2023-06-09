import express from "express";
import {userSignup, userLogin} from '../controllers/userController.js'
import {getProducts, getProductById} from '../controllers/productController.js'
import { authenticateToken, createNewToken } from "../controllers/jwtController.js";


const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);

router.post('/token', createNewToken)

router.post('/signup',userSignup);
router.post('/login',userLogin);

export default router