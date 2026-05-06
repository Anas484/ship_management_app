import type { Request, Response } from "express";
declare const getAllUsers: (req: Request, res: Response) => Promise<void>;
declare const getUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const deleteUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const updateUserById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { getAllUsers, getUserById, deleteUserById, updateUserById };
//# sourceMappingURL=UserController.d.ts.map