import AbstractRouter from '../AbstractRouter.js';
import { RequestMethod } from '../../abstracts/common.js';
import { IRouter } from '../../abstracts/router.js';
import OfficeApiController from '../../controllers/api/offices/OfficeApiController.js';
import OfficesApiController from '../../controllers/api/offices/OfficesApiController.js';

export default class OfficeApiRouter extends AbstractRouter implements IRouter {
    private officeApiController: OfficeApiController;
    private officesApiController: OfficesApiController;

    constructor() {
        super();
        
        this.officeApiController = new OfficeApiController();
        this.officesApiController = new OfficesApiController();
        this.routes = [
            {
                path: '/api/offices',
                controller: this.officesApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/offices',
                controller: this.officesApiController,
                method: RequestMethod.post,
            },
            {
                path: '/api/offices/:id',
                controller: this.officeApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/offices/:id',
                controller: this.officeApiController,
                method: RequestMethod.put,
            },
            {
                path: '/api/offices/:id',
                controller: this.officeApiController,
                method: RequestMethod.delete,
            },
        ]

        this.createRoutes();
    }
}