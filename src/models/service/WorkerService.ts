import AbstractService from './AbstractService.js';
import WorkerResource from '../resource/WorkerResource.js';
import { DbWorker, IWorkerResource, Worker } from '../../abstracts/worker.js';
import AuthenticationError from '../../errors/AuthenticationError.js';
import { Company, DbCompany } from '../../abstracts/company.js';
import CompanyConverter from '../../converters/CompanyConverter.js';
import WorkerConverter from '../../converters/WorkerConverter.js';
import ChangeEmailError from '../../errors/ChangeEmailError.js';

export default class WorkerService extends AbstractService {
    private workerResource: IWorkerResource;

    constructor() {
        super();

        this.workerResource = new WorkerResource();
    }

    public async getWorkerById(workerId: number | string): Promise<Worker> {
        if (!workerId) {
            throw new AuthenticationError('Id not found');
        }
        
        const dbWorker: DbWorker | null = await this.workerResource.getWorkerById(workerId);

        if (!dbWorker) {
            throw new AuthenticationError('Worker not found');
        }

        const worker: Worker = WorkerConverter.convertDbWorker(dbWorker);

        return worker;
    }

    public async getWorkerCompanies(workerId: number | string): Promise<Company[]> {
        if (this.validator.isUndefined(workerId)) {
            throw new AuthenticationError('Id not found');
        }

        const dbWorkerCompanies: DbCompany[] = await this.workerResource.getWorkerCompanies(workerId);
        const workerCompanies: Company[] = CompanyConverter.convertDbCompanies(dbWorkerCompanies);

        return workerCompanies;
    }

    public async changeWorkerInfo(newWorkerInfo: DbWorker): Promise<void> {
        const oldWorkerInfo: DbWorker | null = await this.workerResource.getWorkerByEmail(newWorkerInfo.email);

        if (oldWorkerInfo && (oldWorkerInfo.id !== +newWorkerInfo.id)) {
            throw new ChangeEmailError('This email is already registered');
        }

        await this.workerResource.changeWorkerInfo(newWorkerInfo);
    }
}