import { IBuildingResource, DbBuilding, Building } from '../../abstracts/building.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class BuildingResource extends AbstractResource implements IBuildingResource {
    public async getBuildings(): Promise<DbBuilding[]> {
        const buildings = await Database.getData<DbBuilding[]>(`SELECT * FROM buildings`);

        return this.filterObjectsFromXssAttacks(buildings);
    }

    public async getBuildingById(id: string): Promise<DbBuilding | null> {
        const buildings = await Database.getData<DbBuilding[]>(
            `SELECT * FROM buildings WHERE id=${id}`
        );

        return this.filterObjectFromXssAttacks(buildings[0]);
    }

    public async getBuildingsByCityId(cityId: string): Promise<DbBuilding[]> {
        const buildingsByCityId = await Database.getData<DbBuilding[]>(
            `SELECT * FROM buildings WHERE city_id=${cityId}`
        );

        return this.filterObjectsFromXssAttacks(buildingsByCityId);
    }

    public async addBuilding(building: Building): Promise<void> {
        const { cityId, street, house } = building;

        await Database.sendData(
            `INSERT INTO buildings (city_id, street, house)
            VALUES (?, ?, ?)`, 
            [cityId, street, house]
        );
    }

    public async changeBuilding(building: Building): Promise<void> {
        const { id, cityId, street, house } = building;

        await Database.sendData( 
            `UPDATE buildings 
                SET city_id = ${cityId},
                street = '${street}',
                house = '${house}'
                WHERE id = ${id}`
        );
    }

    public async deleteBuilding(id: string): Promise<number> {
        return Database.deleteDataById('buildings', id);
    }
}