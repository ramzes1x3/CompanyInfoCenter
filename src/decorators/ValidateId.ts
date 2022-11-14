import WrongFormatError from "../errors/WrongFormatIdError.js";

export default function ValidateId(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(id: any) => any>,
): TypedPropertyDescriptor<(id: any) => any> | void {
    const method = descriptor?.value;

    descriptor.value = function (id) {
        const isNumber = id && isFinite(id);
        const isString = typeof id === 'string';
        const isWrongIdFormat = !isNumber || !isString;

        if (isWrongIdFormat) {
            throw new WrongFormatError('Wrong id format');
        }

        return method?.call(this, id);
    }
}