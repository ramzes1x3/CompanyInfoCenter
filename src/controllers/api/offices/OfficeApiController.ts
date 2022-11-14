import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { IOfficeService, Office } from '../../../abstracts/office.js';
import { Request, Response } from 'express';
import { DiType } from '../../../abstracts/di.js';

export default class OfficeApiController extends ApiController implements IController {
    private officeService: IOfficeService;

    constructor() {
        super();

        this.entityName = 'office';
        this.officeService = this.diContainer.get(DiType.officeService);
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            const office: Office = await this.officeService.getOfficeById(id);

            this.sendResponseData<Office>(res, office);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }

    protected override async processPut(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            await this.officeService.validateOfficeId(id);
            
            const changedOffice: Office = {
                id: +id,
                companyId: req.body.companyId,
                buildingId: req.body.buildingId,
                rentalPrice: req.body.rentalPrice,
                constructionYear: req.body.constructionYear,
            };
    
            await this.officeService.changeOffice(changedOffice);
    
            this.sendResponseSuccessfulAction(res, `You changed the information about the ${this.entityName}`);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }

    protected override async processDelete(req: Request, res: Response): Promise<void> {
        const id = req.params.id;

        try {
            await this.officeService.deleteOfficeById(id);

            this.sendResponseSuccessfulAction(res, `You deleted the ${this.entityName}`);
        } catch(err: any) {
            this.handleApiError(err, res, this.entityName);
        }
    }
}