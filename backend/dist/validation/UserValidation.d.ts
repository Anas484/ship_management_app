import { z } from 'zod';
export declare const userRequest: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        CREW: "CREW";
    }>;
}, z.core.$strip>;
export declare const userResponse: z.ZodObject<{
    id: z.ZodNumber;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        ADMIN: "ADMIN";
        CREW: "CREW";
    }>>;
}, z.core.$strip>;
export declare const userLoginRequest: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const userLoginResponse: z.ZodObject<{
    id: z.ZodNumber;
    token: z.ZodString;
}, z.core.$strip>;
export declare const updateUserRequest: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<{
        ADMIN: "ADMIN";
        CREW: "CREW";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=UserValidation.d.ts.map