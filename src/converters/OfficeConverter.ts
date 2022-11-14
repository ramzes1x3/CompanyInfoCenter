import { DbOffice, Office } from "../abstracts/office";
import OfficeEntity from '../models/entity/OfficeEntity.js';

export default class OfficeConverter {
    public static convertDbOffice({ id, company_id, building_id, rental_price, construction_year, }: DbOffice): Office {
        return {
            id,
            companyId: company_id,
            buildingId: building_id,
            rentalPrice: rental_price,
            constructionYear: construction_year,
        };
    }

    public static convertDbOffices(dbOffices: DbOffice[]): Office[] {
        return dbOffices.map(this.convertDbOffice);
    }

    public static convertDbOfficeToEntity(dbOffice: DbOffice): OfficeEntity {
        return new OfficeEntity(this.convertDbOffice(dbOffice));
    }

    public static convertDbOfficesToEntities(dbOffices: DbOffice[]): OfficeEntity[] {
        return dbOffices.map(this.convertDbOfficeToEntity);
    }
}