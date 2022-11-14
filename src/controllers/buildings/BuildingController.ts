import BuildingView from '../../views/buildings/BuildingView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Building } from '../../abstracts/building.js';
import { Request, Response, NextFunction } from 'express';
import BuildingService from '../../models/service/BuildingService.js';

export default class BuildingController extends WebController implements IController {
    private buildingView: BuildingView;
    private buildingService: BuildingService;

    constructor() {
        super();
        
        this.buildingView = new BuildingView();
        this.buildingService = new BuildingService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            const building: Building = await this.buildingService.getBuildingById(id as string | number);

            this.buildingView
                .setData<Building>(building)
                .setTemplate('buildings/building');
            
            this.renderPage(this.buildingView, res, req);
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}