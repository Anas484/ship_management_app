import type { Request, Response } from "express";
declare const getAllTask: (req: Request, res: Response) => Promise<void>;
declare const createTask: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateTaskStatus: (req: Request, res: Response) => Promise<void>;
declare const deleteTask: (req: Request, res: Response) => Promise<void>;
export { getAllTask, createTask, updateTaskStatus, deleteTask };
//# sourceMappingURL=TaskController.d.ts.map