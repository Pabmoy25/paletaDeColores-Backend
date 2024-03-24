import { Router } from "express";
import { listarColores } from "../controllers/paletas.controllers.js";


const router = Router();

router.route('/listarColores').get(listarColores)

export default router