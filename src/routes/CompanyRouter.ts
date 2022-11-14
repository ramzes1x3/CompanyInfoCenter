import AbstractRouter from './AbstractRouter.js';
import CompanyController from '../controllers/companies/CompanyController.js';
import CompaniesController from '../controllers/companies/CompaniesController.js';
import CompanyAddFormController from '../controllers/companies/CompanyAddFormController.js';
import CompanyChangeFormController from '../controllers/companies/CompanyChangeFormController.js';
import CompanyDeleteController from '../controllers/companies/CompanyDeleteController.js';
import { IRouter } from '../abstracts/router.js';
import { RequestMethod } from '../abstracts/common.js';
import DiContainer from '../models/DiContainer.js';
import { DiType } from '../abstracts/di.js';

const diContainer = DiContainer.getContainer();

export default class CompanyRouter extends AbstractRouter implements IRouter {
    private companiesController: CompaniesController;
    private companyController: CompanyController;
    private companyAddFormController: CompanyAddFormController;
    private companyChangeFormController: CompanyChangeFormController;
    private companyDeleteController: CompanyDeleteController;

    constructor() {
        super();
        
        this.companiesController = diContainer.get(DiType.companiesController) as CompaniesController;
        this.companyController = diContainer.get(DiType.companyController) as CompanyController;
        this.companyAddFormController = diContainer.get(DiType.companyAddFormController) as CompanyAddFormController;
        this.companyChangeFormController = diContainer.get(DiType.companyChangeFormController) as CompanyChangeFormController;
        this.companyDeleteController = diContainer.get(DiType.companyDeleteController) as CompanyDeleteController;
        this.routes = [
            {
                path: '/companies',
                controller: this.companiesController,
                method: RequestMethod.get,
            },
            {
                path: '/company',
                controller: this.companyController,
                method: RequestMethod.get,
            },
            {
                path: '/companyAddForm',
                controller: this.companyAddFormController,
                method: RequestMethod.get,
            },
            {
                path: '/companyAddForm',
                controller: this.companyAddFormController,
                method: RequestMethod.post,
            },
            {
                path: '/companyChangeForm',
                controller: this.companyChangeFormController,
                method: RequestMethod.get,
            },
            {
                path: '/companyChangeForm',
                controller: this.companyChangeFormController,
                method: RequestMethod.post,
            },
            {
                path: '/deleteCompany',
                controller: this.companyDeleteController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}