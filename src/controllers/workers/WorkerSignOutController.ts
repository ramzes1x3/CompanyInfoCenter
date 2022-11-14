import { IController } from '../../abstracts/controller.js';
import WebController from '../WebController.js';
import { Request, Response } from 'express';

export default class WorkerSignOutController extends WebController implements IController {
    protected override async processGet(req: Request, res: Response): Promise<void> {
        req.session.destroy(err => void {});

        res.redirect('/workerSignInForm');
    }
}