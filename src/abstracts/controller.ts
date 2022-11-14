import { Request, Response, NextFunction } from 'express';

export interface IController {
    execute: (req: Request, res: Response, next: NextFunction) => Promise<void>,
}