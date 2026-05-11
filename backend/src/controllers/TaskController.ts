import type { Request, Response } from "express";
import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { taskRequest } from "../validation/TaskValidation.js";


const getAllTask = async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany();
        logger.info("Tasks retrieved successfully");
        res.status(200).json(tasks);
    } catch (error) {
        logger.error("Error retrieving tasks");
        res.status(500).json({ message: "Error retrieving tasks" });
    }
}
const createTask = async (req: Request, res: Response) => {
    try {
        const parsed = taskRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const task = await prisma.task.create({
            data: { 
                taskName: parsed.data.taskName,
                taskDescription: parsed.data.taskDescription,
                status: parsed.data.status,
                commentByCrew: parsed.data.commentByCrew!,
                assignedShipId: parsed.data.assignedShipId,
                assignedById: Number(req.user?.id),
                assignedToId: parsed.data.assignedToId,
                dueDate: parsed.data.dueDate
            },
        });
        logger.info("Task created successfully");
        res.status(200).json({ message: "Task created successfully", data: task });
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
            res.status(500).json({ message: error.message });
        }
    }
}

const getMyPendingTask = async (req : Request , res : Response) => {
    try {
        const id = req.user?.id;
        const tasks = await prisma.task.findMany({
            where: {
                assignedToId: Number(id),
                status: "PENDING"
            }
        });
        logger.info("Tasks retrieved successfully");
        res.status(200).json(tasks);
    } catch (error) {
        
    }
}

const updateTaskStatus = async (req: Request, res: Response) => {
    try {
        const status = req.body.status;
        const taskId = req.params.id;
        const task = await prisma.task.update({
            where: { id: Number(taskId) },
            data: { status: status },
        });
        logger.info("Task status updated successfully");
        res.status(200).json({ message: "Task status updated successfully", data: task });
    } catch (error) {
        logger.error("Error updating task status");
        res.status(500).json({ message: "Error updating task status" });
    }
}

const deleteTask = async (req: Request, res: Response) => {
    try {
        const taksId = req.params.id;
        const task = await prisma.task.delete({
            where: {
                id: Number(taksId)
            }
        })
        logger.info("Task deleted successfully");
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        logger.error("Error deleting task");
        res.status(500).json({ message: "Error deleting task" });  
    }
}

export {
    getAllTask,
    getMyPendingTask,
    createTask,
    updateTaskStatus,
    deleteTask
}