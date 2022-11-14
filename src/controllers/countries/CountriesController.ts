import CountriesView from '../../views/countries/CountriesView.js';
import WebController from '../WebController.js';
import { Country } from '../../abstracts/country.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response } from 'express';
import CountryService from '../../models/service/CountryService.js';

export default class CountriesController extends WebController implements IController {
    private countriesView: CountriesView;
    private countryService: CountryService;

    constructor() {
        super();
        
        this.countriesView = new CountriesView();
        this.countryService = new CountryService();
    }

    protected override async processGet(req: Request, res: Response): Promise<void> {
        const countries: Country[] = await this.countryService.getCountries();

        this.countriesView
            .setData<Country[]>(countries)
            .setTemplate('countries/countries');

        this.renderPage(this.countriesView, res, req);
    }
}