import { DbCompany } from "./company";

export interface DbWorker {
    id: number,
    name: string,
    surname: string,
    date_of_birth: Date | null,
    email: string,
    password: string,
}

export interface Worker {
    id: number,
    name: string,
    surname: string,
    dateOfBirth: Date | null,
    email: string,
    password: string,
}

export interface IWorkerResource {
    getWorkers: () => Promise<DbWorker[]>,
    getWorkerById: (id: string | number) => Promise<DbWorker | null>,
    getWorkerByEmail: (email: string) => Promise<DbWorker | null>,
    getWorkerCompanies: (workerId: string | number) => Promise<DbCompany[]>,
    addWorker: (worker: DbWorker) => Promise<void>,
    changeWorkerInfo: (workerInfo: DbWorker) => Promise<void>,
}