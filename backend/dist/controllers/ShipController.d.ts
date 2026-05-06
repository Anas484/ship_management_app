import type { Request, Response } from "express";
declare const createShip: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteShipById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { createShip, deleteShipById };
//# sourceMappingURL=ShipController.d.ts.map