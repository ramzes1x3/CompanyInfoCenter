import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Company, ICompanyService } from '../../abstracts/company.js';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../abstracts/di.js';
import { IView } from '../../abstracts/view.js';

@injectable()
export default class CompanyAddFormController extends WebController implements IController {
    private companyView: IView;
    private companyService: ICompanyService;
    
    constructor(
        @inject(DiType.companyService) companyService: ICompanyService,
        @inject(DiType.companyView) companyView: IView
    ) {
        super();
        
        this.companyView = companyView;
        this.companyService = companyService;
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        this.companyView.setTemplate('companies/companyAddForm');
        
        this.renderPage(this.companyView, res, req);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const company: Company = req.body;

        await this.companyService.addCompany(company);
        
        res.redirect('/companies');
    }
}