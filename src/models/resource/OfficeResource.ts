import { DbOffice, IOfficeResource, Office } from '../../abstracts/office.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class OfficeResource extends AbstractResource implements IOfficeResource {
    public async getOffices(): Promise<DbOffice[]> {
        const offices = await Database.getData<DbOffice[]>(`SELECT * FROM offices`);

        return this.filterObjectsFromXssAttacks(offices);
    }

    public async getOfficeById(id: string): Promise<DbOffice | null> {
        const offices = await Database.getData<DbOffice[]>(
            `SELECT * FROM offices where id=${id}`
        );

        return this.filterObjectFromXssAttacks(offices[0]);
    }

    public async addOffice(office: Office): Promise<void> {
        const {
            companyId,
            buildingId,
            rentalPrice,
            constructionYear,
        } = office;
        
        await Database.sendData(
            `INSERT INTO offices
            (company_id, building_id, rental_price, construction_year)
            VALUES (?, ?, ?, ?)`,
            [companyId, buildingId, rentalPrice, constructionYear]
        );
    }

    public async changeOffice(office: Office): Promise<void> {
        const {
            id, 
            companyId,
            buildingId,
            rentalPrice,
            constructionYear 
        } = office;

        await Database.sendData( 
            `UPDATE offices 
                SET company_id = ${companyId},
                building_id = ${buildingId},
                rental_price = ${rentalPrice},
                construction_year  = ${constructionYear}
                WHERE id = ${id}`
        );
    }

    public async deleteOffice(id: string): Promise<number> {
        return Database.deleteDataById('offices', id);
    }
}