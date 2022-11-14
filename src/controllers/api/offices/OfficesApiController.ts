import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { IOfficeService, Office } from '../../../abstracts/office.js';
import { Request, Response } from 'express';
import { DiType } from '../../../abstracts/di.js';

export default class OfficesApiController extends ApiController implements IController {
    private officeService: IOfficeService;

    constructor() {
        super();

        this.entityName = 'office';
        this.officeService = this.diContainer.get(DiType.officeService);
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const offices: Office[] = await this.officeService.getOffices();

        this.sendResponseData<Office[]>(res, offices);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const office: Office = req.body;

        await this.officeService.addOffice(office);

        this.sendResponseSuccessfulAction(res, `You added an ${this.entityName}`);
    }
}