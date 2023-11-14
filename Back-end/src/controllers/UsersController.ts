import { Request, Response } from 'express';
import User from '../models/Users';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuario por ID' });
    }
  }

  async createUser(req: Request, res: Response) {
    const newUser = req.body;

    try {
      const createdUser = await User.create(newUser);
      res.status(201).json(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear un nuevo usuario' });
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
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar usuario por ID' });
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
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar usuario por ID' });
    }
  }
}

export default new UserController();
