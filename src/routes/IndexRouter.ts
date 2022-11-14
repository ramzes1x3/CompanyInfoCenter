import { RequestMethod } from '../abstracts/common.js';
import { IRouter } from '../abstracts/router.js';
import IndexController from '../controllers/index/IndexController.js';
import AbstractRouter from './AbstractRouter.js';

export default class IndexRouter extends AbstractRouter implements IRouter {
    private indexController: IndexController;

    constructor() {
        super();

        this.indexController = new IndexController();
        this.routes = [
            {
                path: '/',
                controller: this.indexController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}