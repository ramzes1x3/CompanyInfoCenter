import { City, DbCity, ICityResource } from '../../abstracts/city';
import CityConverter from '../../converters/CityConverter.js';
import AbstractService from './AbstractService.js';
import CityResource from '../resource/CityResource.js';

export default class CityService extends AbstractService {
    private cityResource: ICityResource;

    constructor() {
        super();

        this.cityResource = new CityResource();
    }

    public async getCities(): Promise<City[]> {
        const dbCities: DbCity[] = await this.cityResource.getCities();
        const cities: City[] = CityConverter.convertDbCities(dbCities);

        return cities;
    }
}