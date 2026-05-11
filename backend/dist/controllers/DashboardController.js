import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
const getAllShipCrewAttendanceByPercentage = async (req, res) => {
    const totalDays = 30;
    try {
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const shipId = req.body.shipId;
        const attendance = await prisma.attendance.groupBy({
            by: ["crewId"],
            where: {
                shipId: Number(shipId),
                markedOn: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                },
            },
            _count: {
                crewId: true,
            },
            orderBy: {
                _count: {
                    crewId: "desc",
                },
            },
        });
        const crewIds = attendance.map(a => a.crewId);
        const crews = await prisma.user.findMany({
            where: {
                id: {
                    in: crewIds,
                },
            },
        });
        const result = attendance.map(a => {
            const percentage = (a._count.crewId / totalDays) * 100;
            return {
                crew: crews.find(c => c.id === a.crewId),
                attendanceCount: a._count.crewId,
                percentage: percentage.toFixed(2),
            };
        });
        logger.info("Crew attendance by dates with count and percentage retrieved successfully");
        res.status(200).json(result);
    }
    catch (error) {
        logger.error("Error retrieving crew attendance by dates with count and percentage");
        res.status(500).json({ message: "Error retrieving crew attendance by dates with count and percentage" });
    }
};
export { getAllShipCrewAttendanceByPercentage };
//# sourceMappingURL=DashboardController.js.map