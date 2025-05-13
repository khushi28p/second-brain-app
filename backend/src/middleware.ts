import {NextFunction, Request, Response} from 'express';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import { jwtSecret } from './config';

export const userMiddleware = (req: Request, res: Response, next:NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header!, jwtSecret!);

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({message: "you are not logged in"});
    }
}