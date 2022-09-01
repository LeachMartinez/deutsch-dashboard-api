import Router from 'express';
import userController from '../controllers/userController.js';
const router = new Router();

router.get("/new", userController.new);

export default router;