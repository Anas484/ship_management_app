import {email, z} from 'zod';
import { id } from 'zod/locales';



export const userRequest = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(['ADMIN', 'CREW'])
});



export const userResponse = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    role: z.enum(['ADMIN', 'CREW']).default('CREW')
})



export const userLoginRequest = z.object({
    email: z.string().email(),
    password: z.string(),
})


export const userLoginResponse = z.object({
    id: z.number(),
    token:  z.string()
})


export const updateUserRequest = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum(['ADMIN', 'CREW']).optional()
})


