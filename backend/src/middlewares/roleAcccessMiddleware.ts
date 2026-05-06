import { Role } from "@prisma/client";
import type{ Request, Response, NextFunction } from "express";


export const adminOnly = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user?.role !== Role.ADMIN.toString()) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
};

export const crewOnly = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.user?.role !== Role.CREW.toString()) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
};