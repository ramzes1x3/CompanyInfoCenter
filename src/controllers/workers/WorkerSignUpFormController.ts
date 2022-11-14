import View from '../../views/View.js';
import WebController from '../WebController.js';
import EmailRegistrationError from '../../errors/EmailRegistrationError.js';
import { DbWorker } from '../../abstracts/worker.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response, NextFunction } from 'express';
import AuthenticationService from '../../models/service/AuthenticationService.js';

export default class WorkerSignUpFormController extends WebController implements IController {
    private view: View;
    private workerAuthenticationService: AuthenticationService;
    
    constructor() {
        super();
        
        this.view = new View();
        this.workerAuthenticationService = new AuthenticationService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        if (req.session.isLoggedIn) {
            res.redirect('/workerPersonalAccount');
            
            return;
        }

        this.view.setTemplate('workers/workerSignUpForm');
        this.renderPage(this.view, res, req);
    }

    protected override async processPost(req: Request, res: Response, next: NextFunction): Promise<void> {
        const worker: DbWorker = req.body;
        const email = req.body.email;

        try {
            const newWorker = await this.workerAuthenticationService.signUp(worker, email);

            req.session.isLoggedIn = true;
            req.session.workerId = newWorker.id;

            res.redirect('/workerPersonalAccount');
        } catch (err) {
            if (err instanceof EmailRegistrationError) {
                res.redirect(`/workerSignUpForm?errMessage=${err.message}`);
            }
        }
    }
}