export default class EmailRegistrationError extends Error {
    constructor (message: string) {
        super(message);
        this.name = 'EmailRegistrationError';
    }
}