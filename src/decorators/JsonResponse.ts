import { Response, Request } from 'express';

export default function GetJsonResponse (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(req: Request, res: Response, ...restArgs: any[]) => any>
): TypedPropertyDescriptor<(req: Request, res: Response, ...restArgs: any[]) => any> | void {
    const method = descriptor.value;

    descriptor.value = async function(req: Request, res: Response, ...restArgs: any[]): Promise<any> {

        try {
            const data = await method?.call(this, req, res);

            return res.status(200).json({
                data
            });
        } catch(err: any) {
            return res.status(500).json({
                errorMessage: err.message 
            });
        }
    }
}