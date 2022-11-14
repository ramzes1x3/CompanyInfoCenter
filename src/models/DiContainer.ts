import { Container } from 'inversify';
import Environment from "../models/Environment.js";
import { DiType } from '../abstracts/di.js';
import CompanyDummyService from '../models/service/CompanyDummyService.js';
import { ICompanyService } from "../abstracts/company.js";
import CompanyService from '../models/service/CompanyService.js';
import CompanyApiController from '../controllers/api/companies/CompanyApiController.js';
import CompaniesApiController from '../controllers/api/companies/CompaniesApiController.js';
import CompaniesController from '../controllers/companies/CompaniesController.js';
import CompanyController from '../controllers/companies/CompanyController.js';
import CompanyAddFormController from '../controllers/companies/CompanyAddFormController.js';
import CompanyChangeFormController from '../controllers/companies/CompanyChangeFormController.js';
import CompanyDeleteController from '../controllers/companies/CompanyDeleteController.js';
import { ICompanyResource } from '../abstracts/company';
import CompanyResource from './resource/CompanyResource.js';
import CompaniesView from '../views/companies/CompaniesView.js';
import { IView } from '../abstracts/view.js';
import CompanyView from '../views/companies/CompanyView.js';
import BuildingService from './service/BuildingService.js';
import OfficeService from './service/OfficeService.js';
import { IBuildingService } from '../abstracts/building.js';
import { IOfficeService } from '../abstracts/office.js';
import { IController } from '../abstracts/controller.js';

export default class DiContainer {
    public static container: Container;

    public static getContainer(): Container {
        if (!this.container) {
            this.container = new Container();
        }

        return this.container;
    }

    public static initBind() {
        const diContainer = DiContainer.getContainer();

        diContainer.bind<ICompanyService>(DiType.companyService).to(this.chooseCompanyServiceBind());
        diContainer.bind<IBuildingService>(DiType.buildingService).to(BuildingService);
        diContainer.bind<IOfficeService>(DiType.officeService).to(OfficeService);

        diContainer.bind<ICompanyResource>(DiType.companyResource).to(CompanyResource);
        diContainer.bind<IView>(DiType.companiesView).to(CompaniesView);
        diContainer.bind<IView>(DiType.companyView).to(CompanyView);

        diContainer.bind<IController>(DiType.companyApiController).to(CompanyApiController);
        diContainer.bind<IController>(DiType.companiesApiController).to(CompaniesApiController);

        diContainer.bind<IController>(DiType.companiesController).to(CompaniesController);
        diContainer.bind<IController>(DiType.companyController).to(CompanyController);
        diContainer.bind<IController>(DiType.companyAddFormController).to(CompanyAddFormController);
        diContainer.bind<IController>(DiType.companyChangeFormController).to(CompanyChangeFormController);
        diContainer.bind<IController>(DiType.companyDeleteController).to(CompanyDeleteController);
    }

    private static chooseCompanyServiceBind() {
        const hasDbData =  Environment.getDbHost() && Environment.getDbName() && Environment.getDbPassword() && Environment.getDbUserName();

        return hasDbData ? CompanyService: CompanyDummyService;
    }
}
