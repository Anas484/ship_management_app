import { z } from 'zod';
export declare const jwtPayload: z.ZodObject<{
    id: z.ZodNumber;
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        CREW: "CREW";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=jwtValidation.d.ts.map