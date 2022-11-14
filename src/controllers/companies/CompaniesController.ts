import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Company, ICompanyService } from '../../abstracts/company.js';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../abstracts/di.js';
import { IView } from '../../abstracts/view.js';

@injectable()
export default class CompaniesController extends WebController implements IController {
    private companiesView: IView;
    private companyService: ICompanyService;

    constructor(
        @inject(DiType.companyService) companyService: ICompanyService,
        @inject(DiType.companiesView) companiesView: IView
    ) {
        super();
        
        this.companiesView = companiesView;
        this.companyService = companyService;
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const companies: Company[] = await this.companyService.getCompanies();

        this.companiesView
            .setData<Company[]>(companies)
            .setTemplate('companies/companies');

        this.renderPage(this.companiesView, res, req);
    }
}