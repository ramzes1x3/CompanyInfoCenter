import CitiesController from '../controllers/cities/CitiesController.js';
import BuildingsByCityController from '../controllers/buildings/BuildingsByCityController.js';
import AbstractRouter from './AbstractRouter.js';
import { RequestMethod } from '../abstracts/common.js';
import { IRouter } from '../abstracts/router.js';

export default class CityRouter extends AbstractRouter implements IRouter {
    private citiesController: CitiesController;
    private buildingsByCityController: BuildingsByCityController;

    constructor() {
        super();
        
        this.citiesController = new CitiesController();
        this.buildingsByCityController = new BuildingsByCityController();
        this.routes = [
            {
                path: '/cities',
                controller: this.citiesController,
                method: RequestMethod.get,
            },
            {
                path: '/buildingsByCity',
                controller: this.buildingsByCityController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}