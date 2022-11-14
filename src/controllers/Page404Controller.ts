import { IController } from '../abstracts/controller.js';
import View from '../views/View.js';
import WebController from './WebController.js';
import { Request, Response } from 'express';

export default class Page404Controller extends WebController implements IController {
    private view: View;

    constructor() {
        super();
        
        this.view = new View();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        res.status(404);

        this.view.setTemplate('page404');
        
        this.renderPage(this.view, res, req);
    }
}