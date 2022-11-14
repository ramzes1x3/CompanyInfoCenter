import ReqMethodError from '../errors/ReqMethodError.js';
import CsrfTokenError from '../errors/CsrfTokenError.js';
import { randomBytes } from 'crypto';
import { IController } from '../abstracts/controller';
import { Request, Response, NextFunction } from 'express';
import { injectable } from 'inversify';

@injectable()
export default abstract class AbstractController implements IController {
    public async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
        switch(req.method) {
            case 'GET':
                this.setCsrfToken(req);

                await this.processGet(req, res, next);
                break;
            case 'POST': 
                if (!req.session.csrf || !this.isCorrectCsrfToken(req)) {
                    next(new CsrfTokenError('Csrf error'));
                }

                await this.processPost(req, res, next);
                break;
            default:
                next(new ReqMethodError('Request method not found!'));
        }
    }

    protected async processGet(req: Request, res: Response, next: NextFunction): Promise<any> {}
    protected async processPost(req: Request, res: Response, next: NextFunction): Promise<any> {}
    
    protected isNumber(data: any): boolean {
        return data && isFinite(data);
    }

    protected isUndefined(data: any): data is undefined {
        return typeof data === 'undefined';
    }

    protected isString(data: any): data is string {
        return typeof data === 'string';
    }

    private setCsrfToken(req: Request) {
        if (!req.session.csrf) {
            req.session.csrf = randomBytes(100).toString('base64');
        }
    }

    private isCorrectCsrfToken(req: Request): boolean {
        return req.body.csrf === req.session.csrf;
    }
}