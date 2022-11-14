import { Company, DbCompany } from "../abstracts/company";
import CompanyEntity from '../models/entity/CompanyEntity.js';

export default class CompanyConverter {
    public static convertDbCompany({ id, name, number_of_employees, foundation_year }: DbCompany): Company {
        return {
            id,
            name,
            numberOfEmployees: number_of_employees,
            foundationYear: foundation_year,
        };
    }

    public static convertDbCompanies(dbCompanies: DbCompany[]): Company[] {
        return dbCompanies.map(this.convertDbCompany);
    }

    public static convertDbCompanyToEntity(dbCompany: DbCompany): CompanyEntity {
        return new CompanyEntity(this.convertDbCompany(dbCompany));
    }

    public static convertDbCompaniesToEntities(dbCompanies: DbCompany[]): CompanyEntity[] {
        return dbCompanies.map(this.convertDbCompanyToEntity);
    }
}