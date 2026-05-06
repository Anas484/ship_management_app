import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { taskRequest } from "../validation/TaskValidation.js";
const createTask = async (req, res) => {
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
                commentByCrew: parsed.data.commentByCrew,
                assignedShipId: parsed.data.assignedShipId,
                assignedById: Number(req.user?.id),
                assignedToId: parsed.data.assignedToId,
                dueDate: parsed.data.dueDate
            },
        });
        logger.info("Task created successfully");
        res.status(200).json({ message: "Task created successfully", data: task });
    }
    catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
            res.status(500).json({ message: error.message });
        }
    }
};
//# sourceMappingURL=TaskController.js.map