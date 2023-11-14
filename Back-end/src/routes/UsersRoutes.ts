import express from 'express';
import UserController from '../controllers/UsersController';

const router = express.Router();

router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserById);

router.post('/users', UserController.createUser);

router.patch('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

export default router;
