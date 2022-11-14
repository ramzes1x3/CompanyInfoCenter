import WorkerView from '../../views/workers/WorkerView.js';
import WebController from '../WebController.js';
import ChangeEmailError from '../../errors/ChangeEmailError.js';
import { Worker, DbWorker } from '../../abstracts/worker.js';
import { IController } from '../../abstracts/controller.js';
import AuthenticationError from '../../errors/AuthenticationError.js';
import { Request, Response, NextFunction } from 'express';
import WorkerService from '../../models/service/WorkerService.js';

export default class WorkerProfileInformationController extends WebController implements IController {
    private workerView: WorkerView;
    private workerService: WorkerService;

    constructor() {
        super();

        this.workerView = new WorkerView();
        this.workerService = new WorkerService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const workerId = req.session.workerId;

        if (!req.session.isLoggedIn) {
            res.redirect('/404');
            
            return;
        }

        try {
            const worker: Worker = await this.workerService.getWorkerById(workerId as string);

            this.workerView
                .setData<Worker>(worker)
                .setTemplate('workers/workerProfileInformation');
            
            this.renderPage(this.workerView, res, req);
        } catch (err: any) {
            next(err);
        }
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const newWorkerInfo: DbWorker = req.body;
    
        try {
            await this.workerService.changeWorkerInfo(newWorkerInfo);

            res.redirect('/workerPersonalAccount');
        } catch (err: any) {
            if (err instanceof ChangeEmailError) {
                res.redirect(`/workerProfileInformation?errMessage=${err.message}`);
            }
        }
    }
}