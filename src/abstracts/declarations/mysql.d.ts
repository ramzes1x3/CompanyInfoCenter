declare module 'mysql-await' {
    export type ConnectionParamType = string | undefined;

    export interface ConnectionParams {
        host: ConnectionParamType,
        user: ConnectionParamType,
        password: ConnectionParamType,
        database: ConnectionParamType,
    }

    export interface Connection {
        connect(): void,
        awaitQuery<T>(query: string, params?: T): Promise<T>,
    }

    export function createConnection(params: ConnectionParams): Connection;
}