import OfficesView from '../../views/offices/OfficesView.js';
import WebController from '../WebController.js';
import { Office } from '../../abstracts/office.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response } from 'express';
import OfficeService from '../../models/service/OfficeService.js';

export default class OfficesController extends WebController implements IController {
    private officesView: OfficesView;
    private officeService: OfficeService;

    constructor() {
        super();
        
        this.officesView = new OfficesView();
        this.officeService = new OfficeService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const offices: Office[] = await this.officeService.getOffices();

        this.officesView
            .setData<Office[]>(offices)
            .setTemplate('offices/offices');

        this.renderPage(this.officesView, res, req);
    }
}