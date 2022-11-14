export interface ICache {
    getCache: <T>(cacheKey: string) => Promise<T | undefined>,
    writeCache: <T>(data: T, cacheKey: string) => Promise<void>,
    deleteCacheByKey: (cacheKey: string) => Promise<void>,
    deleteCacheByPrefix: (prefix: string) => Promise<void>,
    deleteCache: () => Promise<void>,
}

export interface CacheArgs {
    entityName: string, 
    isCacheWithPostfix: boolean,
}

export enum CacheMethods {
    file = 'file',
    runtime = 'runtime',
    redis = 'redis',
}