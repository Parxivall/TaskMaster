import { Request, Response } from 'express';
import User from '../models/Users';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error: Unable to fetch users' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error: Unable to fetch user by ID' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'Bad Request: Request body is missing' });
    }

    const { phone, nombre, email, roles } = req.body;

    if (!phone || !nombre || !email || !roles) {
      return res.status(400).json({ error: 'Bad Request: Missing required fields' });
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error: Unable to create new user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Bad Request: Request body is missing or empty' });
    }

    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error: Unable to update user by ID' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).json({});
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error: Unable to delete user by ID' });
  }
};
