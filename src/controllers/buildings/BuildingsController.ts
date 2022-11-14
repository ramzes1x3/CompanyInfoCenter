import BuildingsView from '../../views/buildings/BuildingsView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Building } from '../../abstracts/building.js';
import { Request, Response } from 'express';
import BuildingService from '../../models/service/BuildingService.js';

export default class BuildingsController extends WebController implements IController {
    private buildingsView: BuildingsView;
    private buildingService: BuildingService;

    constructor() {
        super();
        
        this.buildingsView = new BuildingsView();
        this.buildingService = new BuildingService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const buildings: Building[] = await this.buildingService.getBuildings();

        this.buildingsView
            .setData<Building[]>(buildings)
            .setTemplate('buildings/buildings');

        this.renderPage(this.buildingsView, res, req);
    }
}