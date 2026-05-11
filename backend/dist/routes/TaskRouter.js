import { Router } from "express";
import { taskRequest } from "../validation/TaskValidation.js";
import { adminOnly } from "../middlewares/roleAcccessMiddleware.js";
import { createTask, deleteTask, updateTaskStatus, getAllTask } from "../controllers/TaskController.js";
const TaskRouter = Router();
TaskRouter.get("/", adminOnly, getAllTask);
TaskRouter.post("/", adminOnly, createTask);
TaskRouter.patch("/:id", updateTaskStatus);
TaskRouter.delete("/:id", adminOnly, deleteTask);
export { TaskRouter };
//# sourceMappingURL=TaskRouter.js.map