import type { Request, Response, NextFunction } from "express";
export declare const adminOnly: () => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const crewOnly: () => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=roleAcccessMiddleware.d.ts.map