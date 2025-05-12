import {NextFunction, Request} from 'express';
import jwt from 'jsonwebtoken';

export const userMiddleware = (req: Request, res: Response, next:NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header!, process.env.JWT_SECRET!);
}