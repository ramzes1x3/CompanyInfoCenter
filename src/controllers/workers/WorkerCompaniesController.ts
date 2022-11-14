import CompaniesView from '../../views/companies/CompaniesView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Company } from '../../abstracts/company.js';
import { Request, Response, NextFunction } from 'express';
import AuthenticationError from '../../errors/AuthenticationError.js';
import WorkerService from '../../models/service/WorkerService.js';

export default class WorkerCompaniesController extends WebController implements IController {
    private companiesView: CompaniesView;
    private workerService: WorkerService;

    constructor() {
        super();

        this.workerService = new WorkerService();
        this.companiesView = new CompaniesView();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {

        try {
            if (!req.session.isLoggedIn) {
                res.redirect('/404');
                
                return;
            }
    
            const workerId = req.session.workerId;

            const workerCompanies: Company[] = await this.workerService.getWorkerCompanies(workerId as string);

            this.companiesView
                .setData<Company[]>(workerCompanies)
                .setTemplate('workers/workerCompanies');
        
            this.renderPage(this.companiesView, res, req);
        } catch(err: any) {
            if (err instanceof AuthenticationError) {
                next(err);
            }
        }
    }
}