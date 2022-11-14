import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { Building, IBuildingService } from '../../../abstracts/building.js';
import { Request, Response } from 'express';
import GetJsonResponse from '../../../decorators/JsonResponse.js';
import { DiType } from '../../../abstracts/di.js';

export default class BuildingsApiController extends ApiController implements IController {
    private buildingService: IBuildingService;

    constructor() {
        super();
        
        this.entityName = 'building';
        this.buildingService = this.diContainer.get(DiType.buildingService);
    }

    @GetJsonResponse
    protected override async processGet(req: Request, res: Response): Promise<Building[]> {
        return this.buildingService.getBuildings();
    }

    @GetJsonResponse
    protected override async processPost(req: Request, res: Response): Promise<string> {
        const building: Building = req.body;

        await this.buildingService.addBuilding(building);
        
        return `You added a ${this.entityName}`;
    }
}