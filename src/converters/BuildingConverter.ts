import { DbBuilding, Building } from '../abstracts/building';
import BuildingEntity from '../models/entity/BuildingEntity.js';

export default class BuildingConverter {
    public static convertDbBuilding({ id, city_id, street, house, }: DbBuilding): Building {
        return {
            id,
            cityId: city_id,
            street,
            house,
        };
    }

    public static convertDbBuildings(dbBuildings: DbBuilding[]): Building[] {
        return dbBuildings.map(this.convertDbBuilding);
    }

    public static convertDbBuildingToEntity(dbBuilding: DbBuilding): BuildingEntity {
        return new BuildingEntity(this.convertDbBuilding(dbBuilding));
    }

    public static convertDbBuildingsToEntities(dbBuildings: DbBuilding[]): BuildingEntity[] {
        return dbBuildings.map(this.convertDbBuildingToEntity);
    }
}