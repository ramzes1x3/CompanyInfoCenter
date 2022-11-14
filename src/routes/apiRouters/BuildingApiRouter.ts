import AbstractRouter from '../AbstractRouter.js';
import { RequestMethod } from '../../abstracts/common.js';
import { IRouter } from '../../abstracts/router.js';
import BuildingApiController from '../../controllers/api/buildings/BuildingApiController.js';
import BuildingsApiController from '../../controllers/api/buildings/BuildingsApiController.js';
import BuildingsByCityApiController from '../../controllers/api/buildings/BuildingsByCityApiController.js';

export default class BuildingApiRouter extends AbstractRouter implements IRouter {
    private buildingApiController: BuildingApiController;
    private buildingsApiController: BuildingsApiController;
    private buildingsByCityApiController: BuildingsByCityApiController;

    constructor() {
        super();
        
        this.buildingApiController = new BuildingApiController();
        this.buildingsApiController = new BuildingsApiController();
        this.buildingsByCityApiController = new BuildingsByCityApiController();
        this.routes = [
            {
                path: '/api/buildings',
                controller: this.buildingsApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/buildings',
                controller: this.buildingsApiController,
                method: RequestMethod.post,
            },
            {
                path: '/api/buildings/:id',
                controller: this.buildingApiController,
                method: RequestMethod.get,
            },
            {
                path: '/api/buildings/:id',
                controller: this.buildingApiController,
                method: RequestMethod.put,
            },
            {
                path: '/api/buildings/:id',
                controller: this.buildingApiController,
                method: RequestMethod.delete,
            },
            {
                path: '/api/buildings/cities/:cityName',
                controller: this.buildingsByCityApiController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}