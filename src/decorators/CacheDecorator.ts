import { CacheArgs } from "../abstracts/cache.js";
import Cache from "../models/cache/Cache.js";

export default function CacheDecorator(cacheArgs: CacheArgs): any {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(postfixKey?: number | string, ...args: any[]) => any>,
    ): TypedPropertyDescriptor<(postfixKey?: number | string, ...args: any[]) => any> | void => {
        const method = descriptor.value;
        const cache = Cache.getInstance();

        descriptor.value = async function (postfixKey?: number | string, ...args: any[]): Promise<any> {
            const { entityName, isCacheWithPostfix } = cacheArgs;
            const cacheKey = isCacheWithPostfix ? `${entityName}_${postfixKey}`: entityName;
            const cachedData = await cache.getCache(cacheKey);

            if (cachedData) {
                return cachedData;
            }

            const data = await method?.call(this, postfixKey, args);
            await cache.writeCache(data, cacheKey);

            return data;
        }
    }
}