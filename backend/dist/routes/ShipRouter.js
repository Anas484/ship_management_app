import { Router } from "express";
import { shipRequest } from "../validation/ShipValidation.js";
import { adminOnly } from "../middlewares/roleAcccessMiddleware.js";
import { createShip, deleteShipById } from "../controllers/ShipController.js";
import { de } from "zod/locales";
const ShipRouter = Router();
ShipRouter.post("/", adminOnly, createShip);
ShipRouter.delete("/:id", adminOnly, deleteShipById);
export { ShipRouter };
//# sourceMappingURL=ShipRouter.js.map