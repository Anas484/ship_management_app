import 'dotenv/config';
import type { Request, Response } from 'express';
declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const signup: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { login, signup };
//# sourceMappingURL=AuthController.d.ts.map