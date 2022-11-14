import Environment from '../Environment.js';
import CachingToFile from './CachingToFile.js';
import CachingRuntime from './CachingRuntime.js';
import CachingRedis from './CachingRedis.js';
import { ICache } from '../../abstracts/cache.js';
import WrongFormatCacheMethodError from '../../errors/WrongFormatCacheMethodError.js';
import { CacheMethods } from '../../abstracts/cache.js';

export default class Cache {
    private static instance: ICache;

    static getInstance() {
        if (Cache.instance === undefined) {
            Cache.instance = Cache.initCache();
        }

        return Cache.instance;
    }

    private static initCache(): ICache {
        const currCacheMethod = Environment.getCacheMethod() as string;

        switch (currCacheMethod) {
            case CacheMethods.file:
                return new CachingToFile();
            case CacheMethods.runtime:
                return new CachingRuntime();
            case CacheMethods.redis:
                return new CachingRedis();
            default:
                throw new WrongFormatCacheMethodError('Wrong cache format');
        }
    }
}