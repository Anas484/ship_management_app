import type { Request, Response } from "express";
declare const createDrills: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleleDrills: (req: Request, res: Response) => Promise<void>;
export { createDrills, deleleDrills };
//# sourceMappingURL=DrillController.d.ts.map