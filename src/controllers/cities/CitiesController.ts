import CitiesView from '../../views/cities/CitiesView.js';
import WebController from '../WebController.js';
import { City } from '../../abstracts/city.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response } from 'express';
import CityService from '../../models/service/CityService.js';

export default class CitiesController extends WebController implements IController {
    private citiesView: CitiesView;
    private cityService: CityService;

    constructor() {
        super();
        
        this.citiesView = new CitiesView();
        this.cityService = new CityService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const cities: City[] = await this.cityService.getCities();

        this.citiesView
            .setData<City[]>(cities)
            .setTemplate('cities/cities');

        this.renderPage(this.citiesView, res, req);
    }
}