import { IController } from '../../abstracts/controller.js';
import View from '../../views/View.js';
import WebController from '../WebController.js';
import { Request, Response } from 'express';

export default class WorkerPersonalAccountController extends WebController implements IController {
    private view: View;

    constructor() {
        super();
        
        this.view = new View();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        if (!req.session.isLoggedIn) {
            res.redirect('/404');

            return;
        }

        this.view.setTemplate('workers/workerPersonalAccount');
        this.renderPage(this.view, res, req);
    }
}