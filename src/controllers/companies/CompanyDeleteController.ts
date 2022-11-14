import { IController } from '../../abstracts/controller.js';
import WebController from '../WebController.js';
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { DiType } from '../../abstracts/di.js';
import { ICompanyService } from '../../abstracts/company.js';

@injectable()
export default class CompanyDeleteController extends WebController implements IController {
    private companyService: ICompanyService;

    constructor(
        @inject(DiType.companyService) companyService: ICompanyService
    ) {
        super();
        
        this.companyService = companyService;
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            await this.companyService.deleteCompanyById(id as string);

            res.redirect('/companies');
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}