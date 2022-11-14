import { injectable } from "inversify";
import { IView } from "../abstracts/view";

@injectable()
export default class View implements IView {
    protected template: string  = '';
    protected data: any;

    public getTemplate(): string {
        return this.template;
    }

    public setTemplate(template: string) {
        this.template = template;
    }

    public setData<T>(data: T): this {
        this.data = data;
        
        return this;
    }

    public getData<T>(): T | null{
        return this.data;
    }
}