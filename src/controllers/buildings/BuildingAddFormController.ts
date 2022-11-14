import BuildingView from '../../views/buildings/BuildingView.js';
import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Building } from '../../abstracts/building.js';
import { Request, Response } from 'express';
import BuildingService from '../../models/service/BuildingService.js';

export default class BuildingAddFormController extends WebController implements IController {
    private buildingView: BuildingView;
    private buildingService: BuildingService;

    constructor() {
        super();
        
        this.buildingService = new BuildingService();
        this.buildingView = new BuildingView();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        this.buildingView.setTemplate('buildings/buildingAddForm');
        this.renderPage(this.buildingView, res, req);
    }

    protected override async processPost(req: Request, res: Response): Promise<void> {
        const building: Building = req.body;

        await this.buildingService.addBuilding(building);
        
        res.redirect('/buildings');
    }
}