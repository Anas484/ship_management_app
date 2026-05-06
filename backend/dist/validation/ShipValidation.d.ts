import { z } from 'zod';
export declare const shipRequest: z.ZodObject<{
    shipName: z.ZodString;
    shipModel: z.ZodString;
    shipCapacity: z.ZodNumber;
}, z.core.$strip>;
export declare const shipDetailsRequest: z.ZodObject<{
    shipId: z.ZodNumber;
    shipSource: z.ZodString;
    shipDestination: z.ZodString;
    departureDate: z.ZodDate;
    arrivalDate: z.ZodDate;
}, z.core.$strip>;
export declare const updateShipDetailsRequest: z.ZodObject<{
    shipId: z.ZodOptional<z.ZodNumber>;
    shipSource: z.ZodOptional<z.ZodString>;
    shipDestination: z.ZodOptional<z.ZodString>;
    departureDate: z.ZodOptional<z.ZodDate>;
    arrivalDate: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
//# sourceMappingURL=ShipValidation.d.ts.map