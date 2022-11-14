import CountryView from '../../views/countries/CountryView.js';
import WebController from '../WebController.js';
import { Country } from '../../abstracts/country.js';
import { IController } from '../../abstracts/controller.js';
import { Request, Response, NextFunction } from 'express';
import CountryService from '../../models/service/CountryService.js';

export default class CountryController extends WebController implements IController {
    private countryView: CountryView;
    private countryService: CountryService;

    constructor() {
        super();
        
        this.countryView = new CountryView();
        this.countryService = new CountryService();
    }

    protected override async processGet(req: Request, res: Response, next: NextFunction): Promise<void> {
        const id = req.query.id;

        try {
            const country: Country = await this.countryService.getCountryById(id as string | number);

            this.countryView
                .setData<Country>(country)
                .setTemplate('countries/country');
            
            this.renderPage(this.countryView, res, req);
        } catch(err: any) {
            this.handleWebError(err, res, 'id', next,  id as string);
        }
    }
}