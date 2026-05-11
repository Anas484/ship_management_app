import {Router} from 'express';
import {adminOnly} from "../middlewares/roleAcccessMiddleware.js";
import {createDrills,deleleDrills} from "../controllers/DrillController.js";

const DrillRouter = Router();


DrillRouter.post("/", adminOnly, createDrills);
DrillRouter.delete("/:id", adminOnly, deleleDrills);


export { DrillRouter };