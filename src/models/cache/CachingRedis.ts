import { createClient } from 'redis';
import { ICache } from '../../abstracts/cache.js';
import ShowExecutionTime from '../../decorators/ExecutionTime.js';

export default class CachingRedis implements ICache {
    private redisClient;

    constructor() {
        this.redisClient = createClient();
        this.redisClient.on('error', (err: any) => console.log('Redis Client Error', err));
    }

    @ShowExecutionTime
    public async getCache<T>(cacheKey: string): Promise<T | undefined> {
        try {
            await this.initRedisClient();
            const data = await this.redisClient.get(cacheKey);

            if (!data){
                return;
            }

            return JSON.parse(data);
        } catch (err: any) {
            console.log(err.message);
        }
        
    }

    public async writeCache<T>(data: T, cacheKey: string): Promise<void> {
        try {
            await this.initRedisClient();
            await this.redisClient.set(cacheKey, JSON.stringify(data));
        } catch (err: any){
            console.log(err.message);
        }
    }

    public async deleteCacheByKey(cacheKey: string): Promise<void> {
        try {
            await this.initRedisClient();
            await this.redisClient.del(cacheKey);
        } catch (err: any){
            console.log(err.message);
        } 
    }

    public async deleteCacheByPrefix(prefix: string): Promise<void> {
        try {
            await this.initRedisClient();

            for await (const key of this.redisClient.scanIterator()) {
                if (key.startsWith(prefix)) {
                    await this.redisClient.del(key);
                }
            }
        } catch (err: any){
            console.log(err.message);
        } 
    };

    public async deleteCache(): Promise<void> {
        try {
            await this.initRedisClient();
            await this.redisClient.flushDb();
        } catch (err: any){
            console.log(err.message);
        }
    }

    private async initRedisClient(): Promise<void> {
        if(!this.redisClient.isReady) {
            await this.redisClient.connect();
        };
    }
}