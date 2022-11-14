import { DbCountry } from '../../abstracts/country.js';
import { IResource } from '../../abstracts/resource.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class CountryResource extends AbstractResource implements IResource {
    public async getCountries(): Promise<DbCountry[]> {
        const countries = await Database.getData<DbCountry[]>('SELECT * FROM countries');

        return this.filterObjectsFromXssAttacks(countries);
    }

    public async getCountryById(id: string): Promise<DbCountry | null> {
        const countries = await Database.getData<DbCountry[]>(
            `SELECT * FROM countries where id=${id}`
        );

        return this.filterObjectFromXssAttacks(countries[0]);
    }
}