import express from "express";
import UsersRoutes from "./UsersRoutes";
import ExternalAuthProvidersRoutes from "./ExternalAuthProvidersRoutes";

const router = express.Router();

router.get('/users',UsersRoutes);
router.get('/users/:id',UsersRoutes);
router.post('/users',UsersRoutes);
router.patch('/users/:id',UsersRoutes);
router.delete('/users/:id',UsersRoutes);

router.get('/external-auth-providers',ExternalAuthProvidersRoutes);
router.get('/external-auth-providers/:id',ExternalAuthProvidersRoutes);
router.post('/external-auth-providers',ExternalAuthProvidersRoutes);
router.patch('/external-auth-providers/:id',ExternalAuthProvidersRoutes);
router.delete('/external-auth-providers/:id',ExternalAuthProvidersRoutes);

export default router;