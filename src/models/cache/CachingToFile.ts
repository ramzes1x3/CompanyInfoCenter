import { promises as fs } from 'fs';
import { ICache } from '../../abstracts/cache.js';
import ShowExecutionTime from '../../decorators/ExecutionTime.js';

export default class CachingToFile implements ICache {
    private cacheDir = './cache';

    @ShowExecutionTime
    public async getCache<T>(cacheKey: string): Promise<T | undefined> {
        try {
            const cachedData: string = await fs.readFile(this.getCachePath(cacheKey), { encoding: 'utf-8' });

            return JSON.parse(cachedData);
        } catch(err: any) {
            console.error(err.message);
        }
    }

    public async writeCache<T>(data: T, cacheKey: string): Promise<void> {
        await fs.writeFile(this.getCachePath(cacheKey), JSON.stringify(data));
    }

    public async deleteCacheByKey(cacheKey: string): Promise<void> {
        try {
            await fs.unlink(this.getCachePath(cacheKey));
        } catch(err: any) {
            console.error(err.message);
        }  
    }

    public async deleteCacheByPrefix(prefix: string): Promise<void> {
        try {
            const files = await fs.readdir(this.cacheDir);
            const filesWithPrefix = files.filter(fileName => fileName.startsWith(prefix));
            await Promise.all(this.getPendingUnlinkFiles(filesWithPrefix));
        } catch(err: any) {
            console.error(err.message);
        }  
    }

    public async deleteCache(): Promise<void> {
        try {
            const files = await fs.readdir(this.cacheDir);
            await Promise.all(this.getPendingUnlinkFiles(files));
          } catch(err: any) {
            console.log(err.message);
          }
    }

    private getCachePath(cacheKey: string): string {
        return `${this.cacheDir}/${cacheKey}.json`;
    }

    private getPendingUnlinkFiles(files: string[]): Promise<void>[] {
        return files.map(fileName => fs.unlink(`${this.cacheDir}/${fileName}`));
    }
}