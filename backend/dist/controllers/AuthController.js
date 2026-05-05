import 'dotenv/config';
import { prisma } from '../utils/PrismaConnection.js';
import { generateToken } from '../utils/jwtUtil.js';
import { userLoginRequest } from '../validation/UserValidation.js';
import bcrypt from 'bcrypt';
const login = async (req, res) => {
    const pardsed = userLoginRequest.safeParse(req.body);
    if (!pardsed.success) {
        return res.status(400).json({ message: pardsed.error.message });
    }
    const { email, password } = pardsed.data;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = generateToken({ id: user.id, role: user.role });
    return res.status(200).json({ message: "success", token });
};
export { login };
//# sourceMappingURL=AuthController.js.map