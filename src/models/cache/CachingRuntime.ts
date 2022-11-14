import { ICache } from "../../abstracts/cache.js";
import ShowExecutionTime from "../../decorators/ExecutionTime.js";

export default class CachingRuntime implements ICache {
    static cacheObject: Record<string, any> = {};

    @ShowExecutionTime
    public async getCache<T>(cacheKey: string): Promise<T | undefined> {
        return CachingRuntime.cacheObject[cacheKey];
    }

    public async writeCache<T>(data: T, cacheKey: string) {
        CachingRuntime.cacheObject[cacheKey] = data;
    }

    public async deleteCacheByKey(cacheKey: string): Promise<void> {
        delete CachingRuntime.cacheObject[cacheKey];
    }

    public async deleteCacheByPrefix(prefix: string): Promise<void> {
        for(let key in CachingRuntime.cacheObject) {
            if (key.startsWith(prefix)) {
                delete CachingRuntime.cacheObject[key];
            }
        }
    };
    

    public async deleteCache(): Promise<void> {
        CachingRuntime.cacheObject = {};
    }
}