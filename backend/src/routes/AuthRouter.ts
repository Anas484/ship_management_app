import {Router} from 'express';
import { login } from '../controllers/AuthController.js';
const AuthRouter = Router();


AuthRouter.post('/login', login);

export {AuthRouter}