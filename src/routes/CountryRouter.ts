import { RequestMethod } from '../abstracts/common.js';
import { IRouter } from '../abstracts/router.js';
import CountriesController from '../controllers/countries/CountriesController.js';
import CountryController from '../controllers/countries/CountryController.js';
import AbstractRouter from './AbstractRouter.js';

export default class CountryRouter extends AbstractRouter implements IRouter {
    private countriesController: CountriesController;
    private countryController: CountryController;

    constructor() {
        super();

        this.countriesController = new CountriesController();
        this.countryController = new CountryController();
        this.routes = [
            {
                path: '/countries',
                controller: this.countriesController,
                method: RequestMethod.get,
            },
            {
                path: '/country',
                controller: this.countryController,
                method: RequestMethod.get,
            },
        ]

        this.createRoutes();
    }
}