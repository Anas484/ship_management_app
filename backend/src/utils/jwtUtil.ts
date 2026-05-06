import 'dotenv/config';
import jwt, { type JwtPayload} from 'jsonwebtoken';
import { jwtPayload } from '../validation/jwtValidation.js';

const KEY = process.env.JWT_SECRET_KEY!;

export const generateToken = (payloads: JwtPayload) => {
    const parsedPayload = jwtPayload.safeParse(payloads);
    if(!parsedPayload.success) {
        throw new Error(parsedPayload.error.message);
    }
    const {id, role} = parsedPayload.data;
    const token = jwt.sign({id, role}, KEY, {expiresIn: '1h'});
    return token;
}