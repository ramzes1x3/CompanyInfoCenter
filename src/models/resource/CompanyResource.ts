import { ICompanyResource, DbCompany, Company } from '../../abstracts/company.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class CompanyResource extends AbstractResource implements ICompanyResource {
    public async getCompanies(): Promise<DbCompany[]> {
        const companies = await Database.getData<DbCompany[]>(`SELECT * FROM companies`);

        return this.filterObjectsFromXssAttacks(companies);
    }

    public async getCompanyById(id: string): Promise<DbCompany | null> {
        const companies = await Database.getData<DbCompany[]>(
            `SELECT * FROM companies where id=${id}`
        );

        return this.filterObjectFromXssAttacks(companies[0]);
    }

    public async addCompany(company: Company): Promise<void> {
        const { 
            name,
            numberOfEmployees,
            foundationYear,
        } = company;

        await Database.sendData(
            `INSERT INTO companies (name, number_of_employees, foundation_year)
            VALUES (?, ?, ?)`,
            [name, numberOfEmployees, foundationYear]
        );
    }

    public async changeCompany(company: Company): Promise<void> {
        const {
            id, 
            name,
            numberOfEmployees,
            foundationYear,
        } = company;

        await Database.sendData( 
            `UPDATE companies 
                SET name = '${name}',
                number_of_employees = ${numberOfEmployees},
                foundation_year = ${foundationYear}
                WHERE id = ${id}`
        );
    }

    public async deleteCompany(id: string): Promise<number> {
        return Database.deleteDataById('companies', id);
    }
}