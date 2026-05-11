import type { Request, Response } from "express";
import { prisma } from "../utils/PrismaConnection.js";
import { logger } from "../configs/winstonConfig.js";
import { attendanceRequest } from "../validation/AttendanceValidation.js";




const getAllAttendanceByDrillId = async (req: Request, res: Response) => {
    try {
        const { drillId } = req.params;
        const attendance = await prisma.attendance.findMany({where: {drillId: Number(drillId)}});
        logger.info("Attendance retrieved successfully");
        res.status(200).json(attendance);
    } catch (error) {
        logger.error("Error retrieving attendance");
        res.status(500).json({ message: "Error retrieving attendance" });
    }
}

const createAttendanceByShipId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const parsed = attendanceRequest.safeParse(req.body);
        if (!parsed.success) {
            logger.error("Enter valid fields");
            return res.status(400).json({ message: parsed.error.message });
        }
        const { status, crewId, drillId} = parsed.data;
        const attendance = await prisma.attendance.create({data: {status: status ,crewId: Number(crewId), drillId: Number(drillId)}});
        logger.info("Attendance created successfully");
        res.status(200).json({ message: "Attendance created successfully", data: attendance });
    } catch (error) {
        logger.error("Error creating attendance");
        res.status(500).json({ message: "Error creating attendance" });
    }
}

export { getAllAttendanceByDrillId };