import OfficeView from '../../views/offices/OfficeView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Office } from '../../abstracts/office.js';
import { Request, Response } from 'express';
import OfficeService from '../../models/service/OfficeService.js';

export default class OfficeAddFormController extends WebController implements IController {
    private officeView: OfficeView;
    private officeService: OfficeService;

    constructor() {
        super();
        
        this.officeView = new OfficeView();
        this.officeService = new OfficeService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        this.officeView.setTemplate('offices/officeAddForm');
        this.renderPage(this.officeView, res, req);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const office: Office = req.body;

        await this.officeService.addOffice(office);
        
        res.redirect('/offices');
    }
}