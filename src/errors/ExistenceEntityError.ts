export default class ExistenceEntityError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ExistenceEntityError';
    }
}