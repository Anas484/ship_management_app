import { Role } from "@prisma/client";
export const adminOnly = () => {
    return (req, res, next) => {
        if (req.user?.role !== Role.ADMIN.toString()) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};
export const crewOnly = () => {
    return (req, res, next) => {
        if (req.user?.role !== Role.CREW.toString()) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};
//# sourceMappingURL=roleAcccessMiddleware.js.map