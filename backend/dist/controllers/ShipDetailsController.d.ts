import type { Request, Response } from "express";
declare const createShipDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateShipDetails: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteShipDetails: (req: Request, res: Response) => Promise<void>;
export { createShipDetails, updateShipDetails, deleteShipDetails };
//# sourceMappingURL=ShipDetailsController.d.ts.map