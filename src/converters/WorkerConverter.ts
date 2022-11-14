import { DbWorker, Worker } from "../abstracts/worker";

export default class WorkerConverter {
    public static convertDbWorker({ id, name, surname, date_of_birth, email, password, }: DbWorker): Worker {
        return {
            id,
            name,
            surname,
            dateOfBirth: date_of_birth,
            email,
            password,
        }
    }

    public static convertDbWorkers(dbWorkers: DbWorker[]): Worker[] {
        return dbWorkers.map(this.convertDbWorker);
    }
}