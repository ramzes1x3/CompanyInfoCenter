export default class ReqMethodError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'ReqMethodError';
    }
}