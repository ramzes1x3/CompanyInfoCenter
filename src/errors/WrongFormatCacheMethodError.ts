export default class WrongFormatCacheMethodError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'WrongFormatCacheMethodError';
    }
}