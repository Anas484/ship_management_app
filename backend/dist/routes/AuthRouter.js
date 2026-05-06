import { Router } from 'express';
import { login, signup } from '../controllers/AuthController.js';
const AuthRouter = Router();
AuthRouter.post('/login', login);
AuthRouter.post('/signup', signup);
export { AuthRouter };
//# sourceMappingURL=AuthRouter.js.map