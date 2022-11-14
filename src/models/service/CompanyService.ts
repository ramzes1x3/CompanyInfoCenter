import { Company, DbCompany, ICompanyResource, ICompanyService } from '../../abstracts/company';
import CompanyConverter from '../../converters/CompanyConverter.js';
import ValidateId from '../../decorators/ValidateId.js';
import ExistenceEntityError from '../../errors/ExistenceEntityError.js';
import AbstractService from './AbstractService.js';
import CacheDecorator from '../../decorators/CacheDecorator.js'
import { injectable, inject } from 'inversify';
import { DiType } from '../../abstracts/di.js';

const singularEntity = 'company';
const pluralEntity = 'companies';

@injectable()
export default class CompanyService extends AbstractService implements ICompanyService {
    private companyResource: ICompanyResource;

    constructor(
        @inject(DiType.companyResource) companyResource: ICompanyResource
    ) {
        super();

        this.companyResource = companyResource;
    }

    @ValidateId
    @CacheDecorator({ entityName: singularEntity, isCacheWithPostfix: true })
    public async getCompanyById(id: number | string): Promise<Company> {
        id = id.toString();

        const dbCompany: DbCompany | null = await this.companyResource.getCompanyById(id);

        if (!dbCompany) {
            throw new ExistenceEntityError(`Error! No db ${singularEntity}`);
        }

        const company: Company = CompanyConverter.convertDbCompany(dbCompany);

        return company;
    }

    @CacheDecorator({ entityName: pluralEntity, isCacheWithPostfix: false })
    public async getCompanies(): Promise<Company[]> {
        const dbCompanies: DbCompany[] = await this.companyResource.getCompanies();
        const companies: Company[] = CompanyConverter.convertDbCompanies(dbCompanies);

        return companies;
    }

    public async addCompany(company: Company): Promise<void> {
        await this.companyResource.addCompany(company);
        await this.deleteEntityCache();
    }

    public async changeCompany(company: Company): Promise<void> {
        await this.companyResource.changeCompany(company);
        await this.deleteEntityCache();
    }

    @ValidateId
    public async deleteCompanyById(id: number | string): Promise<void> {
        const numberOfDeletedRows = await this.companyResource.deleteCompany(id as string);

        if (!numberOfDeletedRows) {
            throw new ExistenceEntityError(`Error! No db ${singularEntity}`);
        }

        await this.deleteEntityCache();
    }

    @ValidateId
    public async validateCompanyId(id: number | string): Promise<void> {
        const dbCompany: DbCompany | null = await this.companyResource.getCompanyById(id.toString());

        if (!dbCompany) {
            throw new ExistenceEntityError(`Error! No db ${singularEntity}`);
        }
    }
}