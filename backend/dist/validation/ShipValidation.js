import { z } from 'zod';
export const shipRequest = z.object({
    shipName: z.string(),
    shipModel: z.string(),
    shipCapacity: z.number(),
});
export const shipDetailsRequest = z.object({
    shipId: z.number(),
    shipSource: z.string(),
    shipDestination: z.string(),
    departureDate: z.date(),
    arrivalDate: z.date()
});
export const updateShipDetailsRequest = z.object({
    shipId: z.number().optional(),
    shipSource: z.string().optional(),
    shipDestination: z.string().optional(),
    departureDate: z.date().optional(),
    arrivalDate: z.date().optional()
});
//# sourceMappingURL=ShipValidation.js.map