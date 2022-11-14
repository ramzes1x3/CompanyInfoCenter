import { Country, DbCountry, ICountryResource } from '../../abstracts/country';
import CountryConverter from '../../converters/CountryConverter.js';
import ValidateId from '../../decorators/ValidateId.js';
import ExistenceEntityError from '../../errors/ExistenceEntityError.js';
import CountryResource from '../resource/CountryResource.js';
import AbstractService from './AbstractService.js';

export default class CountryService extends AbstractService {
    private countryResource: ICountryResource;

    constructor() {
        super();

        this.singularEntity = 'country';
        this.countryResource = new CountryResource();
    }

    @ValidateId
    public async getCountryById(id: number | string): Promise<Country> {
        const dbCountry: DbCountry | null = await this.countryResource.getCountryById(id as string);

        if (!dbCountry) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }

        const country: Country = CountryConverter.convertDbCountry(dbCountry);

        return country;
    }

    public async getCountries(): Promise<Country[]> {
        const dbCountries: DbCountry[] = await this.countryResource.getCountries();
        const countries: Country[] = CountryConverter.convertDbCountries(dbCountries);

        return countries;
    }
}