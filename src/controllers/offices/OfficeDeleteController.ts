import { IController } from '../../abstracts/controller.js';
import WebController from '../WebController.js';
import { Request, Response, NextFunction } from 'express';
import OfficeService from '../../models/service/OfficeService.js';

export default class OfficeDeleteController extends WebController implements IController {
    private officeService: OfficeService;

    constructor() {
        super();
        
        this.officeService = new OfficeService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            await this.officeService.deleteOfficeById(id as string);

            res.redirect('/offices');
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}