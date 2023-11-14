import { Request, Response } from 'express';
import ExternalAuthProvider from '../models/ExternalAuthProviders';

class ExternalAuthProviderController {
  async getAllExternalAuthProviders(req: Request, res: Response) {
    try {
      const providers = await ExternalAuthProvider.findAll();
      res.status(200).json(providers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'tables created and synchronized correctly' });
    }
  }

  async getProviderById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const provider = await ExternalAuthProvider.findByPk(id);
      if (provider) {
        res.status(200).json(provider);
      } else {
        res.status(404).json({ error: 'External authentication provider not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error getting external authentication provider by ID' });
    }
  }

  async createProvider(req: Request, res: Response) {
    const newProvider = req.body;

    try {
      const createdProvider = await ExternalAuthProvider.create(newProvider);
      res.status(201).json(createdProvider);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating a new external authentication provider' });
    }
  }

  async updateProvider(req: Request, res: Response) {
    const { id } = req.params;
    const updatedProvider = req.body;

    try {
      const provider = await ExternalAuthProvider.findByPk(id);
      if (provider) {
        await provider.update(updatedProvider);
        res.status(200).json(provider);
      } else {
        res.status(404).json({ error: 'External authentication provider not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating external authentication provider by ID' });
    }
  }

  async deleteProvider(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const provider = await ExternalAuthProvider.findByPk(id);
      if (provider) {
        await provider.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'External authentication provider not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error removing external authentication provider by ID' });
    }
  }
}

export default new ExternalAuthProviderController();
