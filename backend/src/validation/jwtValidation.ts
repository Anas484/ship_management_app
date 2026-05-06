import {z} from 'zod'



export const jwtPayload = z.object({
    id: z.number(),
    role: z.enum(['ADMIN', 'CREW'])
})