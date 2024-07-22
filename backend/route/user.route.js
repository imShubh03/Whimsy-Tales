//definig the routes for signup
import express from 'express'
import { login, signup } from '../controller/user.controller.js'

const router = express.Router()


//post to mongodb
router.post("/signup", signup);
router.post("/login",login)

export default router;
