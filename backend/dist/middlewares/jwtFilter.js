import jwt, {} from 'jsonwebtoken';
const KEY = process.env.JWT_SECRET_KEY;
export const jwtFilter = async (req, res, next) => {
    if (req.originalUrl.startsWith("/auth/")) {
        return next();
    }
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
};
//# sourceMappingURL=jwtFilter.js.map