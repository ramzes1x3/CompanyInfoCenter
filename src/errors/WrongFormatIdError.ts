export default class WrongFormatError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'WrongFormatError';
    }
}