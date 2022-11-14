import WorkerSignInFormController from '../controllers/workers/WorkerSignInFormController.js';
import WorkerSignUpFormController from '../controllers/workers/WorkerSignUpFormController.js';
import WorkerPersonalAccountController from '../controllers/workers/WorkerPersonalAccountController.js';
import WorkerProfileInformationController from '../controllers/workers/WorkerProfileInformationController.js';
import WorkerCompaniesController from '../controllers/workers/WorkerCompaniesController.js';
import WorkerSignOutController from '../controllers/workers/WorkerSignOutController.js';
import AbstractRouter from './AbstractRouter.js';
import { IRouter } from '../abstracts/router.js';
import { RequestMethod } from '../abstracts/common.js';

export default class WorkerRouter extends AbstractRouter implements IRouter {
    private workerProfileInformationController: WorkerProfileInformationController;
    private workerPersonalAccountController: WorkerPersonalAccountController;
    private workerSignUpFormController: WorkerSignUpFormController;
    private workerSignInFormController: WorkerSignInFormController;
    private workerCompaniesController: WorkerCompaniesController;
    private workerSignOutController: WorkerSignOutController;

    constructor() {
        super();

        this.workerProfileInformationController = new WorkerProfileInformationController();
        this.workerPersonalAccountController = new WorkerPersonalAccountController();
        this.workerSignUpFormController = new WorkerSignUpFormController();
        this.workerSignInFormController = new WorkerSignInFormController();
        this.workerCompaniesController = new WorkerCompaniesController();
        this.workerSignOutController = new WorkerSignOutController();
        this.routes = [
            {
                path: '/workerSignInForm',
                controller: this.workerSignInFormController,
                method: RequestMethod.get,
            },
            {
                path: '/workerSignInForm',
                controller: this.workerSignInFormController,
                method: RequestMethod.post,
            },
            {
                path: '/workerSignUpForm',
                controller: this.workerSignUpFormController,
                method: RequestMethod.get,
            },
            {
                path: '/workerSignUpForm',
                controller: this.workerSignUpFormController,
                method: RequestMethod.post,
            },
            {
                path: '/workerProfileInformation',
                controller: this.workerProfileInformationController,
                method: RequestMethod.get,
            },
            {
                path: '/workerProfileInformation',
                controller: this.workerProfileInformationController,
                method: RequestMethod.post,
            },
            {
                path: '/workerPersonalAccount',
                controller: this.workerPersonalAccountController,
                method: RequestMethod.get,
            },
            {
                path: '/workerCompanies',
                controller: this.workerCompaniesController,
                method: RequestMethod.get,
            },
            {
                path: '/workerSignOut',
                controller: this.workerSignOutController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}