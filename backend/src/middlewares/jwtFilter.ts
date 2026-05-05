import jwt, { type JwtPayload} from 'jsonwebtoken';
import type{ Request, Response, NextFunction } from 'express';


const KEY = process.env.JWT_SECRET_KEY!

declare global {
  namespace Express {
    interface Request {
      user?: {
        id:    number
        role:  string
      }
    }
  }
}

export const jwtFilter = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({message: "Unauthorized"});
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token!, KEY) as {id: number, role: string};
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
}