import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { Company } from '../../../abstracts/company.js';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../../abstracts/di.js';
import { ICompanyService } from '../../../abstracts/company.js';

@injectable()
export default class CompanyApiController extends ApiController implements IController {
    private companyService: ICompanyService;

    constructor(
        @inject(DiType.companyService) companyService: ICompanyService
    ) {
        super();
        
        this.entityName = 'company';
        this.companyService = companyService;
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            const company: Company = await this.companyService.getCompanyById(id);

            this.sendResponseData<Company>(res, company);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }

    protected override async processPut(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            await this.companyService.validateCompanyId(id);

            const changedCompany: Company = {
                id: +id,
                name: req.body.name,
                numberOfEmployees: req.body.numberOfEmployees,
                foundationYear: req.body.foundationYear,
            };
    
            await this.companyService.changeCompany(changedCompany);
    
            this.sendResponseSuccessfulAction(res, `You changed the information about the ${this.entityName}`);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }

    protected override async processDelete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            await this.companyService.deleteCompanyById(id);

            this.sendResponseSuccessfulAction(res, `You deleted the ${this.entityName}`);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }
}