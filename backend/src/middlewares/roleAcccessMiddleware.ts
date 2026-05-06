import type{ Request, Response, NextFunction } from "express";


const roleAccessMiddleware = (role: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user?.role !== role) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
};