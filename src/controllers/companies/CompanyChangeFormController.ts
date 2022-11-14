import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Company, ICompanyService } from '../../abstracts/company.js';
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../abstracts/di.js';
import { IView } from '../../abstracts/view.js';

@injectable()
export default class CompanyChangeFormController extends WebController implements IController {
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

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            const company: Company = await this.companyService.getCompanyById(id as string | number);

            this.companyView
                .setData<Company>(company)
                .setTemplate('companies/companyChangeForm');
            
            this.renderPage(this.companyView, res, req);
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const company: Company = req.body;

        await this.companyService.changeCompany(company);

        res.redirect('/companies');
    }
}