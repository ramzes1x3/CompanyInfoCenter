export default class ChangeEmailError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'ChangeEmailError';
    }
}