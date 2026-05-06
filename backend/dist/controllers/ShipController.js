import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { shipRequest } from "../validation/ShipValidation.js";
const createShip = async (req, res) => {
    try {
        const parsed = shipRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const { shipName, shipModel, shipCapacity } = parsed.data;
        const ship = await prisma.ship.create({ data: { shipName, shipModel, shipCapacity } });
    }
    catch (error) {
    }
};
const deleteShipById = async (req, res) => {
    try {
        const { id } = req.params;
        const ship = await prisma.ship.delete({ where: { id: Number(id) } });
        logger.info("Ship deleted successfully");
        return res.status(200).json({ message: "Ship deleted successfully" });
    }
    catch (error) {
        logger.error("Error deleting ship");
        return res.status(500).json({ message: "Error deleting ship" });
    }
};
export { createShip, deleteShipById };
//# sourceMappingURL=ShipController.js.map