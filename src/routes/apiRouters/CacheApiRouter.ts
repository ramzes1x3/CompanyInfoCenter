import AbstractRouter from '../AbstractRouter.js';
import { IRouter } from '../../abstracts/router';
import CacheApiController from '../../controllers/api/CacheApiController.js';
import { RequestMethod } from '../../abstracts/common.js';

export default class CacheApiRouter extends AbstractRouter implements IRouter {
    private cacheApiController: CacheApiController;

    constructor() {
        super();

        this.cacheApiController = new CacheApiController();

        this.routes = [
            {
                path: '/api/deleteCache',
                controller: this.cacheApiController,
                method: RequestMethod.delete,
            },
        ]

        this.createRoutes();
    }
}