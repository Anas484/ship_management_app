import 'dotenv/config';
import { prisma } from '../utils/PrismaConnection.js';
import { Role } from '@prisma/client';
import { generateToken } from '../utils/jwtUtil.js';
import { userLoginRequest, userRequest, userResponse } from '../validation/UserValidation.js';
import bcrypt from 'bcrypt';
import { logger } from '../configs/winstonConfig.js';
const login = async (req, res) => {
    try {
        const pardsed = userLoginRequest.safeParse(req.body);
        if (!pardsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: pardsed.error.message });
        }
        const { email, password } = pardsed.data;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            logger.warn("User not found");
            return res.status(401).json({ message: "Enter valid credentials" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = generateToken({ id: user.id, role: user.role });
        logger.info("Login successful");
        return res.status(200).json({ message: "success", token });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
const signup = async (req, res) => {
    try {
        const parsed = userRequest.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ message: parsed.error.message });
        }
        const isUserExist = await prisma.user.findUnique({ where: { email: parsed.data.email } });
        if (isUserExist) {
            logger.info("User already exist");
            return res.status(400).json({ message: "User already exist" });
        }
        let { role } = parsed.data;
        const { firstName, lastName, email, password } = parsed.data;
        if (role === "ADMIN") {
            role = Role.ADMIN;
        }
        else {
            role = Role.CREW;
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await prisma.user.create({ data: { firstName, lastName, email, password: hashedPassword, role } });
        console.log(user);
        return res.status(200).json({ message: "success", ...userResponse.safeParse(user).data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export { login, signup };
//# sourceMappingURL=AuthController.js.map