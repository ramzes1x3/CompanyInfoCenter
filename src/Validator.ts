export default class Validator {
    public isNumber(data: any): boolean {
        return data && isFinite(data);
    }

    public isUndefined(data: any): data is undefined {
        return typeof data === 'undefined';
    }

    public isString(data: any): data is string {
        return typeof data === 'string';
    }

    public isCorrectFormatId(id: any): boolean {
        return !this.isNumber(id) || !this.isString(id);
    }
}