import { Response, Request, NextFunction } from 'express';
import AbstractController from '../AbstractController.js';
import { IController } from '../../abstracts/controller.js';
import ReqMethodError from '../../errors/ReqMethodError.js';
import WrongFormatError from '../../errors/WrongFormatIdError.js';
import ExistenceEntityError from '../../errors/ExistenceEntityError.js';
import DiContainer from '../../models/DiContainer.js';

export default class ApiController extends AbstractController implements IController {
    protected entityName = '';
    protected diContainer = DiContainer.getContainer();

    public override async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
        switch(req.method) {
            case 'GET':
                await this.processGet(req, res, next);
                break;
            case 'POST': 
                await this.processPost(req, res, next);
                break;
            case 'PUT': 
                await this.processPut(req, res, next);
                break;
            case 'DELETE': 
                await this.processDelete(req, res, next);
                break;
            default:
                next(new ReqMethodError('Request method not found!'));
        }
    }

    protected async processPut(req: Request, res: Response, next: NextFunction): Promise<any> {}
    protected async processDelete(req: Request, res: Response, next: NextFunction): Promise<any> {}

    protected sendResponseSuccessfulAction(res: Response, actionDescription: string): Response<any, Record<string, any>> {
        return res.json({
            message: `Success! ${actionDescription}`
        });
    }

    protected sendResponseData<T>(res: Response, data: T, status: number = 200): Response<any, Record<string, any>> {
        return res.status(status).json({
            data: data
        });
    }

    protected sendError(res: Response, errorMessage: string, status: number = 500, extraParams: Record<string, any> = {}): Response<any, Record<string, any>> {
        return res.status(status).json({
            ...extraParams,
            errorMessage: errorMessage
        });
    }

    protected sendErrorWrongFormat(res: Response, dataName: string = 'id'): Response<any, Record<string, any>> {
        return this.sendError(res, `Incorrect ${dataName} format`);
    }

    protected sendErrorExistenceEntity(res: Response, entityName: string): Response<any, Record<string, any>> {
        return this.sendError(res, `Error! No db ${entityName}`);
    }

    protected handleApiError(err: any, res: Response, entityName: string) {
        if (err instanceof WrongFormatError) {
            this.sendErrorWrongFormat(res);

            return;
        }

        if (err instanceof ExistenceEntityError) {
            this.sendErrorExistenceEntity(res, entityName);

            return;
        }

        this.sendError(res, err.message);
    }
}