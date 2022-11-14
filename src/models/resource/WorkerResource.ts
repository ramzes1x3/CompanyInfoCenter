import { DbCompany } from '../../abstracts/company.js';
import { DbWorker, IWorkerResource } from '../../abstracts/worker.js';
import Database from '../../Database.js';
import AbstractResource from './AbstractResource.js';

export default class WorkerResource extends AbstractResource implements IWorkerResource {
    public async getWorkers(): Promise<DbWorker[]> {
        const workers = await Database.getData<DbWorker[]>('SELECT * FROM workers');

        return this.filterObjectsFromXssAttacks(workers);
    }

    public async getWorkerById(id: string | number): Promise<DbWorker | null> {
        const workers = await Database.getData<DbWorker[]>(
            `SELECT * FROM workers where id=${id}`
        );

        return this.filterObjectFromXssAttacks(workers[0]);
    }

    public async getWorkerByEmail(email: string): Promise<DbWorker | null> {
        const workers = await Database.getData<DbWorker[]>(
            `SELECT * FROM workers WHERE email = '${email}'`
        );

        return this.filterObjectFromXssAttacks(workers[0]);
    }

    public async getWorkerCompanies(workerId: string | number): Promise<DbCompany[]> {
        const workerCompanies = await Database.getData<DbCompany[]>(
            `SELECT c.id, c.name, c.number_of_employees, c.foundation_year FROM companies AS c, 
                companies_workers AS cw WHERE cw.worker_id=${workerId} AND c.id = cw.company_id`
        );

        return workerCompanies;
    }

    public async addWorker(worker: DbWorker): Promise<void> {
        const {
            name,
            surname,
            date_of_birth,
            email,
            password,
        } = worker;

        await Database.sendData(
            `INSERT INTO workers
            (name, surname, date_of_birth, email, password) 
            VALUES (?, ?, ?, ?, ?)`,
            [name, surname, date_of_birth, email, password]
        );
    }

    public async changeWorkerInfo(workerInfo: DbWorker): Promise<void> {
        const {
            id,
            name,
            surname,
            date_of_birth,
            email,
        } = workerInfo;

        await Database.sendData( 
            `UPDATE workers 
                SET name = '${name}',
                surname = '${surname}',
                date_of_birth = '${date_of_birth}',
                email  = '${email}'
                WHERE id = ${id}`
        );
    }
}