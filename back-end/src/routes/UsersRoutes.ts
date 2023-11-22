import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser  } from '../controllers/UsersController';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/login', loginUser);

export default router;
