import BuildingsView from '../../views/buildings/BuildingsView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Building } from '../../abstracts/building.js';
import { Request, Response, NextFunction } from 'express';
import BuildingService from '../../models/service/BuildingService.js';

export default class BuildingsByCityController extends WebController implements IController {
    private buildingsView: BuildingsView;
    private buildingService: BuildingService;

    constructor() {
        super();
        
        this.buildingsView = new BuildingsView();
        this.buildingService = new BuildingService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const cityName = req.query.city;

        try {
            const buildings: Building[] = await this.buildingService.getBuildingsByCityName(cityName as string);

            this.buildingsView
                .setData<Building[]>(buildings)
                .setTemplate('buildings/buildingsByCity');

            this.renderPage(this.buildingsView, res, req);
        } catch(err: any) {
            this.handleWebError(err, res, 'city name', next, cityName as string);
        }
    }
}