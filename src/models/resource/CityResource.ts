import { ICityResource, DbCity } from '../../abstracts/city.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class CityResource extends AbstractResource implements ICityResource{
    public async getCities(): Promise<DbCity[]> {
        const cities = await Database.getData<DbCity[]>(`SELECT * FROM cities`);

        return this.filterObjectsFromXssAttacks(cities);
    }

    public async getCityByName(cityName: string): Promise<DbCity | null> {
        const cities = await Database.getData<DbCity[]>(
            `SELECT * FROM cities WHERE name='${cityName}'`
        );

        return this.filterObjectFromXssAttacks(cities[0]);
    }
}