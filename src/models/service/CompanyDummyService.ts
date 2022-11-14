import { Company, ICompanyService } from '../../abstracts/company.js';

import { injectable } from 'inversify';
import WrongFormatError from '../../errors/WrongFormatIdError.js';

let companies: Company[] = [
    {
        id: 2, 
        name: "comDummy",
        numberOfEmployees: 20000,
        foundationYear: 2022,
    },
    {
        id: 3, 
        name: "comDummy1",
        numberOfEmployees: 200001,
        foundationYear: 2021,
    },
    {
        id: 4, 
        name: "comDummy3",
        numberOfEmployees: 2000,
        foundationYear: 2022,
    },
    {
        id: 5, 
        name: "comDummy5",
        numberOfEmployees: 20000,
        foundationYear: 2022,
    },
];


@injectable()
export default class CompanyDummyService implements ICompanyService {
    public async getCompanyById(id: number | string): Promise<Company> {
        this.validateCompanyId(id);

        return companies.find(company => company.id === +id) as Company;
    }

    public async getCompanies(): Promise<Company[]> {
        return companies;
    }

    public async addCompany(company: Company): Promise<void> {
        companies.push(company);
    }

    public async changeCompany(company: Company): Promise<void> {
        companies = companies.map((elem) => {
             if(elem.id === company.id) {
                elem = company;
             }
             return elem;
        });
    }

    public async deleteCompanyById(id: number | string): Promise<void> {
        this.validateCompanyId(id);

        for(let i = 0; i < companies.length; i++){
            if(companies[i].id === +id) {
                companies.splice(i, 1);
                break;
            }
        }
    }

    public async validateCompanyId (id: number | string): Promise<void> {
        const isNumber = id && isFinite(+id);
        const isString = typeof id === 'string';
        const isWrongIdFormat = !isNumber || !isString;

        try {
            if (isWrongIdFormat) {
                throw new WrongFormatError('Wrong id format');
            }
        } catch (err: any) {
            console.log(err.message);
        }
    }
}