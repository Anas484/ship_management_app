import { Router } from "express";
import { getAllUsers, getUserById, deleteUserById } from "../controllers/UserController.js";
import { adminOnly } from "../middlewares/roleAcccessMiddleware.js";
const UserRouter = Router();
UserRouter.get("/all", adminOnly, getAllUsers);
UserRouter.get("/:id", adminOnly, getUserById);
UserRouter.delete("/:id", adminOnly, deleteUserById);
UserRouter.patch("/:id", adminOnly, getUserById);
export { UserRouter };
//# sourceMappingURL=UserRouter.js.map