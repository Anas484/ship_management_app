import { z } from 'zod';
export declare const drillRequest: z.ZodObject<{
    drillName: z.ZodString;
    drillType: z.ZodString;
    drillDate: z.ZodDate;
    location: z.ZodString;
    shipId: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=DrillValidation.d.ts.map