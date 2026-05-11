import { Router } from "express";
import { getAllUsers,getUserById,deleteUserById } from "../controllers/UserController.js";
import { adminOnly } from "../middlewares/roleAcccessMiddleware.js";

const UserRouter = Router();

UserRouter.get("/all", getAllUsers)
UserRouter.get("/:id", adminOnly ,getUserById)
UserRouter.delete("/:id",deleteUserById)
UserRouter.patch("/:id", adminOnly ,getUserById)



export { UserRouter };