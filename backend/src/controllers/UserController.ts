import type { Request, Response } from "express";
import { prisma } from "../utils/PrismaConnection.js";
import { updateUserRequest, userResponse } from "../validation/UserValidation.js";
import { logger } from "../configs/winstonConfig.js";



const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        const userRes = users.map((user) => userResponse.safeParse(user).data);
        logger.info("Users retrieved successfully");
        res.status(200).json(userRes);
    } catch (error) {
        logger.error("Error retrieving users");
        res.status(500).json({ message: "Error retrieving users" });
    }
};

const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        if (!user) {
            logger.warn("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const userRes = userResponse.safeParse(user).data;
        logger.info("User retrieved successfully");
        res.status(200).json(userRes);
    } catch (error) {
        logger.error("Error retrieving user");
        res.status(500).json({ message: "Error retrieving user" });
    }
}


const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({ where: { id: Number(id) } });
        if (!user) {
            logger.warn("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        logger.info("User deleted successfully");
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        logger.error("Error deleting user");
        res.status(500).json({ message: "Error deleting user" });
    }
}

const updateUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const parsed = updateUserRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const data = Object.fromEntries(
            Object.entries(parsed.data).filter(([_, v]) => v !== undefined)
        );
        const user = await prisma.user.update({ 
            where: { id: Number(id) }, 
            data: data
        });
        if (!user) {
            logger.warn("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        logger.info("User updated successfully");
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        
    }
}




export { 
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
};