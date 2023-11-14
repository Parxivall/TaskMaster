import express from 'express';
import externalAuthProviderController from '../controllers/ExternalAuthProvidersController';

const router = express.Router();

router.get('/external-auth-providers', externalAuthProviderController.getAllExternalAuthProviders);

router.get('/external-auth-providers/:id', externalAuthProviderController.getProviderById);

router.post('/external-auth-providers', externalAuthProviderController.createProvider);

router.patch('/external-auth-providers/:id', externalAuthProviderController.updateProvider);

router.delete('/external-auth-providers/:id', externalAuthProviderController.deleteProvider);

export default router;
