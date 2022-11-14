import AbstractRouter from './AbstractRouter.js';
import Page404Controller from '../controllers/Page404Controller.js';
import { IRouter } from '../abstracts/router.js';
import { RequestMethod } from '../abstracts/common.js';

export default class Page404Router extends AbstractRouter implements IRouter {
    private page404Controller: Page404Controller;

    constructor() {
        super();

        this.page404Controller = new Page404Controller();
        this.routes = [
            {
                path: '*',
                controller: this.page404Controller,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}