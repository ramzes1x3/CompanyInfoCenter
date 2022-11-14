import AbstractRouter from './AbstractRouter.js';
import BuildingController from '../controllers/buildings/BuildingController.js';
import BuildingsController from '../controllers/buildings/BuildingsController.js';
import BuildingAddFormController from '../controllers/buildings/BuildingAddFormController.js';
import BuildingChangeFormController from '../controllers/buildings/BuildingChangeFormController.js';
import BuildingDeleteController from '../controllers/buildings/BuildingDeleteController.js';
import { RequestMethod } from '../abstracts/common.js';
import { IRouter } from '../abstracts/router.js';

export default class BuildingRouter extends AbstractRouter implements IRouter {
    private buildingsController: BuildingsController;
    private buildingController: BuildingController;
    private buildingAddFormController: BuildingAddFormController;
    private buildingChangeFormController: BuildingChangeFormController;
    private buildingDeleteController: BuildingDeleteController;

    constructor() {
        super();
        
        this.buildingsController = new BuildingsController();
        this.buildingController = new BuildingController();
        this.buildingAddFormController = new BuildingAddFormController();
        this.buildingChangeFormController = new BuildingChangeFormController();
        this.buildingDeleteController = new BuildingDeleteController();
        this.routes = [
            {
                path: '/building',
                controller: this.buildingController,
                method: RequestMethod.get,
            },
            {
                path: '/buildings',
                controller: this.buildingsController,
                method: RequestMethod.get,
            },
            {
                path: '/buildingAddForm',
                controller: this.buildingAddFormController,
                method: RequestMethod.get,
            },
            {
                path: '/buildingAddForm',
                controller: this.buildingAddFormController,
                method: RequestMethod.post,
            },
            {
                path: '/buildingChangeForm',
                controller: this.buildingChangeFormController,
                method: RequestMethod.get,
            },
            {
                path: '/buildingChangeForm',
                controller: this.buildingChangeFormController,
                method: RequestMethod.post,
            },
            {
                path: '/deleteBuilding',
                controller: this.buildingDeleteController,
                method: RequestMethod.get
            }
        ]

        this.createRoutes();
    }
}