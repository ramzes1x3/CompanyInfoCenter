import AbstractRouter from './AbstractRouter.js';
import OfficeController from '../controllers/offices/OfficeController.js';
import OfficesController from '../controllers/offices/OfficesController.js';
import OfficeAddFormController from '../controllers/offices/OfficeAddFormController.js';
import OfficeChangeFormController from '../controllers/offices/OfficeChangeFormController.js';
import OfficeDeleteController from '../controllers/offices/OfficeDeleteController.js';
import { IRouter } from '../abstracts/router.js';
import { RequestMethod } from '../abstracts/common.js';

export default class OfficeRouter extends AbstractRouter implements IRouter {
    private officesController: OfficesController;
    private officeController: OfficeController;
    private officeAddFormController: OfficeAddFormController;
    private officeChangeFormController: OfficeChangeFormController;
    private officeDeleteController: OfficeDeleteController;

    constructor() {
        super();

        this.officesController = new OfficesController();
        this.officeController = new OfficeController();
        this.officeAddFormController = new OfficeAddFormController();
        this.officeChangeFormController = new OfficeChangeFormController();
        this.officeDeleteController = new OfficeDeleteController();
        this.routes = [
            {
                path: '/offices',
                controller: this.officesController,
                method: RequestMethod.get,
            },
            {
                path: '/office',
                controller: this.officeController,
                method: RequestMethod.get,
            },
            {
                path: '/officeAddForm',
                controller: this.officeAddFormController,
                method: RequestMethod.get,
            },
            {
                path: '/officeAddForm',
                controller: this.officeAddFormController,
                method: RequestMethod.post,
            },
            {
                path: '/officeChangeForm',
                controller: this.officeChangeFormController,
                method: RequestMethod.get,
            },
            {
                path: '/officeChangeForm',
                controller: this.officeChangeFormController,
                method: RequestMethod.post,
            },
            {
                path: '/deleteOffice',
                controller: this.officeDeleteController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}