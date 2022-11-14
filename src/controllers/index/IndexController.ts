import { IController } from '../../abstracts/controller.js';
import View from '../../views/View.js';
import WebController from '../WebController.js';
import { Request, Response } from 'express';

export default class IndexController extends WebController implements IController {
    private view: View;

    constructor() {
        super();
        this.view = new View();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        this.renderPage(this.view, res, req);
    }
}