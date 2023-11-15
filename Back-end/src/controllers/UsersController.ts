import { Request, Response } from 'express';
import User from '../models/Users';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to get the user' });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to geting the user for id' });
    }
  }

  async createUser(req: Request, res: Response) {
    const newUser = req.body;
    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH:", req.body);
  
    if (!newUser.phone || !newUser.nombre || !newUser.email || !newUser.roles) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    try {
      const createdUser = await User.create(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to create new user' });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updatedUser = req.body;

    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.update(updatedUser);
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to updated the user for id ' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to deletion user for id' });
    }
  }
}

export default new UserController();
