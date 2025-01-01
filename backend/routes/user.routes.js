import { Router } from 'express';
import userController from '../controllers/user.controller.js';
const router = Router();

// Define the routes and map them to controller functions
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;
