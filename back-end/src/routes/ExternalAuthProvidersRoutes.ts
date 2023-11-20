import express from 'express';
import { getAllExternalAuthProviders, getProviderById, createProvider, updateProvider, deleteProvider } from '../controllers/ExternalAuthProvidersController';

const router = express.Router();

router.get('/external-auth-providers', getAllExternalAuthProviders);
router.get('/external-auth-providers/:id', getProviderById);
router.post('/external-auth-providers', createProvider);
router.patch('/external-auth-providers/:id', updateProvider);
router.delete('/external-auth-providers/:id', deleteProvider);

export default router;
