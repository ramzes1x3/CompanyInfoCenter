import { DbWorker, IWorkerResource } from '../../abstracts/worker.js';
import AuthenticationError from '../../errors/AuthenticationError.js';
import AbstractService from './AbstractService.js';
import WorkerResource from '../resource/WorkerResource.js';
import EmailRegistrationError from '../../errors/EmailRegistrationError.js';
import Password from '../../Password.js';

export default class AuthenticationService extends AbstractService {
    private workerResource: IWorkerResource;
    private password: Password;

    constructor() {
        super();

        this.workerResource = new WorkerResource();
        this.password = new Password();
    }

    public async signIn(email: string, password: string): Promise<DbWorker> {
        const worker: DbWorker | null = await this.workerResource.getWorkerByEmail(email);

        if (!worker) {
            throw new AuthenticationError('Incorrect email');
        }

        const isCorrectPassword: boolean = await this.password.isEqualHashes(password, worker.password);

        if (!isCorrectPassword) {
            throw new AuthenticationError('Incorrect password');
        }
        
        return worker;
    }

    public async signUp(worker: DbWorker, email: string): Promise<DbWorker> {
        const currWorker = Object.assign({}, worker);
        currWorker.password = await this.password.hashPassword(worker.password, 10);
        const workerByEmail: DbWorker | null = await this.workerResource.getWorkerByEmail(email);

        if (workerByEmail) {
            throw new EmailRegistrationError('This email is already registered');
        }

        await this.workerResource.addWorker(currWorker);
        const newWorker: DbWorker | null = await this.workerResource.getWorkerByEmail(email);

        if (!newWorker) {
            throw new EmailRegistrationError('Failed to add an account');
        }

        return newWorker;
    }
}