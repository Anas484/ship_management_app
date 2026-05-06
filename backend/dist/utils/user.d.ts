declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                role: string;
            };
        }
    }
}
export {};
//# sourceMappingURL=user.d.ts.map