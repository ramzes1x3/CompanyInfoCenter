import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { Building, IBuildingService } from '../../../abstracts/building.js';
import { Request, Response } from 'express';
import GetJsonResponse from '../../../decorators/JsonResponse.js';
import { DiType } from '../../../abstracts/di.js';

export default class BuildingApiController extends ApiController implements IController {
    private buildingService: IBuildingService;

    constructor() {
        super();
        
        this.entityName = 'building';
        this.buildingService = this.diContainer.get(DiType.buildingService);
    }

    @GetJsonResponse
    protected override async processGet(req: Request, res: Response): Promise<Building> {
        const id = req.params.id;

        return this.buildingService.getBuildingById(id);
    }

    @GetJsonResponse
    protected override async processPut(req: Request, res: Response): Promise<string> {
        const id = req.params.id;
        await this.buildingService.validateBuildingId(id);

        const changedBuilding: Building = {
            id: +id,
            cityId: req.body.cityId,
            street: req.body.street,
            house: req.body.house,
        };

        await this.buildingService.changeBuilding(changedBuilding);

        return `You changed the information about the ${this.entityName}`;
    }

    @GetJsonResponse
    protected override async processDelete(req: Request, res: Response): Promise<string> {
        const id = req.params.id;
        await this.buildingService.deleteBuildingById(id);

        return `You deleted the ${this.entityName}`;
    }
}