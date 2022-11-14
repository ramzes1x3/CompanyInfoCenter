import OfficeView from '../../views/offices/OfficeView.js';
import WebController from '../WebController.js';
import { Office } from '../../abstracts/office.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response, NextFunction } from 'express';
import OfficeService from '../../models/service/OfficeService.js';

export default class OfficeController extends WebController implements IController {
    private officeView: OfficeView;
    private officeService: OfficeService;

    constructor() {
        super();

        this.officeView = new OfficeView();
        this.officeService = new OfficeService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            const office: Office = await this.officeService.getOfficeById(id as string | number);

            this.officeView
                .setData<Office>(office)
                .setTemplate('offices/office');
            
            this.renderPage(this.officeView, res, req);
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}