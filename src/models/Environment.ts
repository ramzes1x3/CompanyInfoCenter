import dotenv from 'dotenv';
dotenv.config();

export default class Environment {
    public static getDbName(): string | undefined {
        return process.env.DB_NAME;
    }

    public static getDbHost(): string | undefined {
        return process.env.DB_HOST;
    }

    public static getDbPassword(): string | undefined {
        return process.env.DB_PASSWORD;
    }

    public static getDbUserName(): string | undefined {
        return process.env.DB_USER;
    }

    public static getCacheMethod(): string | undefined {
        return process.env.CACHE_METHOD;
    }
}