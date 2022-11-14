export default class CsrfTokenError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'CsrfTokenError';
    }
}