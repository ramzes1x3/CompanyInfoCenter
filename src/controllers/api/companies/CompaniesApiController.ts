import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { Company, ICompanyService } from '../../../abstracts/company.js';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../../abstracts/di.js';

@injectable()
export default class CompaniesApiController extends ApiController implements IController {
    private companyService: ICompanyService;

    constructor(
        @inject(DiType.companyService) companyService: ICompanyService
    ) {
        super();

        this.entityName = 'company';
        this.companyService = companyService;
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const companies: Company[] = await this.companyService.getCompanies();

        this.sendResponseData<Company[]>(res, companies);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const company: Company = req.body;

        await this.companyService.addCompany(company);
        
        this.sendResponseSuccessfulAction(res, `You added a ${this.entityName}`);
    }
}