import { Building, DbBuilding, IBuildingResource, IBuildingService } from '../../abstracts/building';
import { DbCity, ICityResource } from '../../abstracts/city';
import BuildingConverter from '../../converters/BuildingConverter.js';
import ExistenceEntityError from '../../errors/ExistenceEntityError.js';
import WrongFormatError from '../../errors/WrongFormatIdError.js';
import BuildingResource from '../resource/BuildingResource.js';
import AbstractService from './AbstractService.js';
import CityResource from '../resource/CityResource.js';
import ValidateId from '../../decorators/ValidateId.js';

export default class BuildingService extends AbstractService implements IBuildingService {
    private buildingResource: IBuildingResource;
    private cityResource: ICityResource;

    constructor() {
        super();

        this.singularEntity = 'building';
        this.pluralEntity = 'buildings';
        this.buildingResource = new BuildingResource();
        this.cityResource = new CityResource();
    }

    @ValidateId
    public async getBuildingById(id: number | string): Promise<Building> {
        const cacheKey = `${this.singularEntity}_${id}`;
        id = id.toString();

        const cachedBuilding = await this.cache.getCache<Building | undefined>(cacheKey);

        if (cachedBuilding) {
            return cachedBuilding;
        }

        const dbBuilding: DbBuilding | null = await this.buildingResource.getBuildingById(id);

        if (!dbBuilding) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }

        const building: Building = BuildingConverter.convertDbBuilding(dbBuilding);
        await this.cache.writeCache<Building>(building, cacheKey);
        
        return building;
    }

    public async getBuildings(): Promise<Building[]> {
        const cachedBuildings = await this.cache.getCache<Building[] | undefined>(this.pluralEntity);

        if (cachedBuildings) {
            return cachedBuildings;
        }

        const dbBuildings: DbBuilding[] = await this.buildingResource.getBuildings();
        const buildings: Building[] = BuildingConverter.convertDbBuildings(dbBuildings);
        await this.cache.writeCache<Building[]>(buildings, this.pluralEntity);

        return buildings;
    }

    public async getBuildingsByCityName(cityName: string): Promise<Building[]> {
        const cacheKey = `${this.pluralEntity}_by_${cityName}`;

        if (!this.validator.isString(cityName)) {
            throw new WrongFormatError('Wrong cityName format');
        }

        const city: DbCity | null = await this.cityResource.getCityByName(cityName);

        if (!city) {
            throw new ExistenceEntityError('Error! No db city');
        }
 
        const cachedBuildings = await this.cache.getCache<Building[] | undefined>(cacheKey);

        if (cachedBuildings) {
            return cachedBuildings;
        }

        const dbBuildings: DbBuilding[] = await this.buildingResource.getBuildingsByCityId(city.id.toString());
        const buildings: Building[] = BuildingConverter.convertDbBuildings(dbBuildings);
        await this.cache.writeCache<Building[]>(buildings, cacheKey);

        return buildings;
    }

    public async addBuilding(building: Building): Promise<void> {
        await this.buildingResource.addBuilding(building);
        await this.deleteEntityCache();
    }

    public async changeBuilding(building: Building): Promise<void> {
        await this.buildingResource.changeBuilding(building);
        await this.deleteEntityCache();
    }

    @ValidateId
    public async deleteBuildingById(id: number | string): Promise<void> {
        const numberOfDeletedRows = await this.buildingResource.deleteBuilding(id as string);

        if (!numberOfDeletedRows) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }

        await this.deleteEntityCache();
    }

    @ValidateId
    public async validateBuildingId(id: number | string): Promise<void> {
        const dbBuilding: DbBuilding | null = await this.buildingResource.getBuildingById(id.toString());

        if (!dbBuilding) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }
    }
}