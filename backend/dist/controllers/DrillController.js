import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { drillRequest } from "../validation/DrillValidation.js";
const createDrills = async (req, res) => {
    try {
        const parsed = drillRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const { drillName, drillType, drillDate, location, shipId } = parsed.data;
        const drill = await prisma.drill.create({
            data: {
                drillName: drillName,
                drillType: drillType,
                drillDate: drillDate,
                location: location,
                shipId: shipId
            }
        });
        logger.info("Drill created successfully");
        res.status(200).json({ message: "Drill created successfully", data: drill });
    }
    catch (error) {
        logger.error("Error creating drill");
        res.status(500).json({ message: "Error creating drill" });
    }
};
const deleleDrills = async (req, res) => {
    try {
        const drillId = req.params.id;
        const drill = await prisma.drill.delete({
            where: {
                id: Number(drillId)
            }
        });
        logger.info("Drill deleted successfully");
        res.status(200).json({ message: "Drill deleted successfully" });
    }
    catch (error) {
        logger.error("Error deleting drill");
        res.status(500).json({ message: "Error deleting drill" });
    }
};
export { createDrills, deleleDrills };
//# sourceMappingURL=DrillController.js.map