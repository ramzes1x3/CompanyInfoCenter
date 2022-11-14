import express, { Router } from 'express';
import { injectable } from 'inversify';
import { Route } from '../abstracts/common.js';
import { IRouter } from '../abstracts/router.js';

@injectable()
export default abstract class AbstractRouter implements IRouter {
    protected router: Router;
    protected routes: Route[] = [];
    
    constructor() {
        this.router = express.Router();
    }

    public createRoutes() {
        this.routes.forEach((route: Route) => {
            const { path, controller, method } = route;

            this.router[method](path, controller.execute.bind(controller));
        });
    }

    public getRouter(): Router {
        return this.router;
    }
}