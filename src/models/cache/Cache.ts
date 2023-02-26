import { ICache } from '../../abstracts/cache.js';
import CachingFactory from "./CachingFactory.js";

export default class Cache {
    private static instance: ICache;

    private constructor() {}

    static getInstance() {
        if (Cache.instance === undefined) {
            Cache.instance = CachingFactory.initCache();
        }

        return Cache.instance;
    }
}