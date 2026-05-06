import { Router } from "express";
import { adminOnly } from "../middlewares/roleAcccessMiddleware.js";
import { createShipDetails, deleteShipDetails, updateShipDetails } from "../controllers/ShipDetailsController.js";
const ShipDetailsRouter = Router();
ShipDetailsRouter.post("/", adminOnly, createShipDetails);
ShipDetailsRouter.put("/", adminOnly, updateShipDetails);
ShipDetailsRouter.delete("/:id", adminOnly, deleteShipDetails);
export { ShipDetailsRouter };
//# sourceMappingURL=ShipDetailsRouter.js.map