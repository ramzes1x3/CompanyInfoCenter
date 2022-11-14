export default class IdUrlParameterError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'IdUrlParameterError';
    }
}