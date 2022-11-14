export default function ShowExecutionTime(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    const method = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<any> {
        const startTime = new Date();
        const data = await method?.apply(this, args);
        const executionTime = new Date().getTime() - startTime.getTime();

        console.log(`Execution time: ${executionTime} sec` );

        return data;
    }
}