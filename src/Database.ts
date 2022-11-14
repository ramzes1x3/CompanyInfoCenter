import mysql, { Connection } from 'mysql-await';
import Environment from './models/Environment.js';

export default class Database {
    public static connection: Connection;
    
    public static getConnection(): Connection {
        if (this.connection){
            return this.connection;
        }

        this.connection = mysql.createConnection({
          host: Environment.getDbHost(),
          user: Environment.getDbUserName(),
          password: Environment.getDbPassword(),
          database: Environment.getDbName(),
        });

        this.connection.connect();

        return this.connection;
    }

    public static async sendData<T>(query: string, params?: T): Promise<void> {
        const connection = this.getConnection();
        await connection.awaitQuery(query, params);
    }

    public static async getData<T>(query: string): Promise<T> {
        const connection = this.getConnection();
        const data = await connection.awaitQuery<T>(query);

        return data;
    }

    public static async deleteDataById(tableName: string, id: string): Promise<number> {
        const connection = this.getConnection();
        const infoAboutAction: any = await connection.awaitQuery(`DELETE FROM ${tableName} WHERE id = ${id} LIMIT 1;`);
        
        return infoAboutAction.affectedRows;
    }
}