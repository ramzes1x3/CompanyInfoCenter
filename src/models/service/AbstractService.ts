import { ICache } from "../../abstracts/cache.js";
import Validator from "../../Validator.js";
import Cache from "../cache/Cache.js";
import { injectable } from "inversify";

@injectable()
export default class AbstractService {
    protected cache: ICache;
    protected validator: Validator;
    protected singularEntity = '';
    protected pluralEntity = '';

    constructor() {

        this.cache = Cache.getInstance();
        this.validator = new Validator();
    }

    public getSingularEntity() {
        return this.singularEntity;
    }

    public getPluralEntity() {
        return this.pluralEntity;
    }
    
    protected async deleteEntityCache(): Promise<void> {
        await this.cache.deleteCacheByPrefix(this.singularEntity);
        await this.cache.deleteCacheByPrefix(this.pluralEntity);
    }
}