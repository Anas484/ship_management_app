import type { Request, Response } from "express";
import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { shipDetailsRequest, updateShipDetailsRequest } from "../validation/ShipValidation.js";

//Create Ship Details
const createShipDetails = async (req: Request, res: Response) => {
    try {
        const parsed = shipDetailsRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const { shipId, shipSource, shipDestination, departureDate, arrivalDate} = parsed.data;
        const ship = await prisma.shipDetails.create({
            data: { shipId, shipSource, shipDestination, departureDate, arrivalDate },
        });
        logger.info("Ship details created successfully");
        res.status(200).json({ message: "Ship details created successfully", data : ship });
    } catch (error) {
        
    }
}


const updateShipDetails = async (req : Request, res: Response) => {
    try {
        const {id} = req.params
        const parsed = updateShipDetailsRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const data = Object.fromEntries(
            Object.entries(parsed.data).filter(([_, v]) => v !== undefined)
        );
        const ship = await prisma.shipDetails.update({ 
            where: { id: Number(id) }, 
            data: data
        });
        logger.info("Ship details updated successfully");
        res.status(200).json({ message: "Ship details updated successfully", data : ship });
    } catch (error) {
        logger.error("Error updating ship details");
        res.status(500).json({ message: "Error updating ship details" });
    }
}


const deleteShipDetails = async (req : Request, res: Response) => {
    try {
        const {id} = req.params
        const ship = await prisma.shipDetails.delete({where: {id: Number(id)}})
        logger.info("Ship details deleted successfully");
        res.status(200).json({ message: "Ship details deleted successfully" });
    } catch (error) {
        logger.error("Error deleting ship details");
        res.status(500).json({ message: "Error deleting ship details" });
    }
}




export {
    createShipDetails,
    updateShipDetails,
    deleteShipDetails
}