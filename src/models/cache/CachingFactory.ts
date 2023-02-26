import {CacheMethods, ICache} from '../../abstracts/cache.js';
import Environment from '../Environment.js';
import CachingToFile from './CachingToFile.js';
import CachingRuntime from './CachingRuntime.js';
import CachingRedis from './CachingRedis.js';
import WrongFormatCacheMethodError from '../../errors/WrongFormatCacheMethodError.js';

export default class CachingFactory {
    static initCache(): ICache {
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