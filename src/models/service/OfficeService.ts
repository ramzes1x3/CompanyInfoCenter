import { Office, DbOffice, IOfficeResource } from '../../abstracts/office';
import OfficeConverter from '../../converters/OfficeConverter.js';
import ValidateId from '../../decorators/ValidateId.js';
import ExistenceEntityError from '../../errors/ExistenceEntityError.js';
import OfficeResource from '../resource/OfficeResource.js';
import AbstractService from './AbstractService.js';

export default class OfficeService extends AbstractService {
    private officeResource: IOfficeResource;

    constructor() {
        super();

        this.singularEntity = 'office';
        this.pluralEntity = 'offices';
        this.officeResource = new OfficeResource();
    }

    @ValidateId
    public async getOfficeById(id: number | string): Promise<Office> {
        const cacheKey = `${this.singularEntity}_${id}`;
        id = id.toString();

        const cachedOffice = await this.cache.getCache<Office | undefined>(cacheKey);

        if (cachedOffice) {
            return cachedOffice;
        }

        const dbOffice: DbOffice | null = await this.officeResource.getOfficeById(id);

        if (!dbOffice) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }
        
        const office: Office = OfficeConverter.convertDbOffice(dbOffice);
        await this.cache.writeCache<Office>(office, cacheKey);

        return office;
    }

    public async getOffices(): Promise<Office[]> {
        const cachedOffices = await this.cache.getCache<Office[] | undefined>(this.pluralEntity);

        if (cachedOffices) {
            return cachedOffices;
        }

        const dbOffices: DbOffice[] = await this.officeResource.getOffices();
        const offices: Office[] = OfficeConverter.convertDbOffices(dbOffices);
        await this.cache.writeCache<Office[]>(offices, this.pluralEntity);

        return offices;
    }

    public async addOffice(office: Office): Promise<void> {
        await this.officeResource.addOffice(office);
        await this.deleteEntityCache();
    }

    public async changeOffice(office: Office): Promise<void> {
        await this.officeResource.changeOffice(office);
        await this.deleteEntityCache();
    }

    @ValidateId
    public async deleteOfficeById(id: number | string): Promise<void> {
        const numberOfDeletedRows = await this.officeResource.deleteOffice(id as string);

        if (!numberOfDeletedRows) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }

        await this.deleteEntityCache();
    }

    @ValidateId
    public async validateOfficeId(id: number | string): Promise<void> {
        const dbOffice: DbOffice | null = await this.officeResource.getOfficeById(id.toString());

        if (!dbOffice) {
            throw new ExistenceEntityError(`Error! No db ${this.singularEntity}`);
        }
    }
}