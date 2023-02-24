import { promises as fs, open, mkdir } from 'fs';
import { ICache } from '../../abstracts/cache.js';
import ShowExecutionTime from '../../decorators/ExecutionTime.js';

export default class CachingToFile implements ICache {
    private cacheDir = './cache';

    constructor() {
        this.createDir();
    }

    @ShowExecutionTime
    public async getCache<T>(cacheKey: string): Promise<T | undefined> {
        let cachedJsonData;

        try {
            open(this.getCachePath(cacheKey), 'r', async (err: any) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.error(`${this.getCachePath(cacheKey)} does not exist`);
                        return;
                    }
                }

                const cachedData: string = await fs.readFile(this.getCachePath(cacheKey), { encoding: 'utf-8' });

                cachedJsonData = await JSON.parse(cachedData);
            });

            return cachedJsonData;
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

    private createDir() {
        try {
            open(this.cacheDir, 'r', async (err: any) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.error('Dir does not exist');
                        return;
                    }
                }

                mkdir(this.cacheDir, {recursive: true}, err => {});
            });
        } catch(err: any) {
            console.error(err.message);
        }
    }
}