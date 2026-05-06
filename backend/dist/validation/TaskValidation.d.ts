import { z } from 'zod';
export declare const taskRequest: z.ZodObject<{
    taskName: z.ZodString;
    taskDescription: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<{
        PENDING: "PENDING";
        IN_PROGRESS: "IN_PROGRESS";
        COMPLETED: "COMPLETED";
    }>>;
    commentByCrew: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedShipId: z.ZodNumber;
    assignedById: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    assignedToId: z.ZodNumber;
    dueDate: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=TaskValidation.d.ts.map