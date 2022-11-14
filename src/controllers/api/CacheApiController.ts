import ApiController from './ApiController.js';
import { ICache } from '../../abstracts/cache.js';
import Cache from '../../models/cache/Cache.js';
import { Request, Response, NextFunction } from 'express';

export default class CacheApiController extends ApiController {
    private cache: ICache;

    constructor() {
        super();

        this.cache = Cache.getInstance();
    }

    public override async processDelete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await this.cache.deleteCache();
            this.sendResponseSuccessfulAction(res, 'You clear cache');
        } catch(err: any) {
            this.sendError(res, err.message);
        }
    }
}