import ApiController from '../ApiController.js';
import { IController } from '../../../abstracts/controller.js';
import { Building, IBuildingService } from '../../../abstracts/building.js';
import { Request, Response } from 'express';
import GetJsonResponse from '../../../decorators/JsonResponse.js';
import { DiType } from '../../../abstracts/di.js';

export default class BuildingsByCityApiController extends ApiController implements IController {
    private buildingService: IBuildingService;

    constructor() {
        super();
        
        this.entityName = 'building by city'
        this.buildingService = this.diContainer.get(DiType.buildingService);
    }

    @GetJsonResponse
    protected override async processGet(req: Request, res: Response): Promise<Building[]> {
        const cityName = req.params.cityName;

        return this.buildingService.getBuildingsByCityName(cityName);
    }
}