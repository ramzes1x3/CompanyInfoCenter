import WebController from '../WebController.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response, NextFunction} from 'express';
import BuildingService from '../../models/service/BuildingService.js';

export default class BuildingDeleteController extends WebController implements IController {
    private buildingService: BuildingService;

    constructor() {
        super();
        
        this.buildingService = new BuildingService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            await this.buildingService.deleteBuildingById(id as string);

            res.redirect('/buildings');
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}