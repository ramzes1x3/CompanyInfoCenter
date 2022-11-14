import View from '../../views/View.js';
import WebController from '../WebController.js';
import AuthenticationError from '../../errors/AuthenticationError.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response } from 'express';
import AuthenticationService from '../../models/service/AuthenticationService.js';

export default class WorkerSignInFormController extends WebController implements IController {
    private view: View;
    private workerAuthenticationService: AuthenticationService;

    constructor() {
        super();
        
        this.view = new View();
        this.workerAuthenticationService = new AuthenticationService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        if (req.session.isLoggedIn) {
            res.redirect('workerPersonalAccount');
            
            return;
        }

        this.view.setTemplate('workers/workerSignInForm');
        this.renderPage(this.view, res, req);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            const worker = await this.workerAuthenticationService.signIn(email, password);

            req.session.isLoggedIn = true;
            req.session.workerId = worker.id;
            res.redirect('/workerPersonalAccount');
        } catch (err) {
            if (err instanceof AuthenticationError) {
                res.redirect(`/workerSignInForm?errMessage=${err.message}`);
            }
        }
    }
}