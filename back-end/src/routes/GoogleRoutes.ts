import express from 'express';
import { generateAuthUrl } from '../services/Google';

const routerGoogle = express.Router();

routerGoogle.get('/authUrl', generateAuthUrl);

export default routerGoogle;