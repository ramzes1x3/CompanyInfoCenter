import AbstractRouter from '../AbstractRouter.js';
import { RequestMethod } from '../../abstracts/common.js';
import { IRouter } from '../../abstracts/router.js';
import CompanyApiController from '../../controllers/api/companies/CompanyApiController.js';
import CompaniesApiController from '../../controllers/api/companies/CompaniesApiController.js';
import DiContainer from '../../models/DiContainer.js';
import { DiType } from '../../abstracts/di.js';
import { injectable } from 'inversify';

const diContainer = DiContainer.getContainer();

@injectable()
export default class CompanyApiRouter extends AbstractRouter implements IRouter {
    private companyApiController: CompanyApiController;
    private companiesApiController: CompaniesApiController;

    constructor() {
        super();
        
        this.companyApiController = diContainer.get(DiType.companyApiController) as CompanyApiController;
        this.companiesApiController = diContainer.get(DiType.companiesApiController) as CompaniesApiController;
        this.routes = [
            {
                path: '/api/companies',
                controller: this.companiesApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/companies',
                controller: this.companiesApiController,
                method: RequestMethod.post,
            },
            {
                path: '/api/companies/:id',
                controller: this.companyApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/companies/:id',
                controller: this.companyApiController,
                method: RequestMethod.put,
            },
            {
                path: '/api/companies/:id',
                controller: this.companyApiController,
                method: RequestMethod.delete,
            },
        ]

        this.createRoutes();
    }
}