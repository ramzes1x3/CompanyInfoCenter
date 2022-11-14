import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class CompanyView extends View implements IView {
    public override setData<T>(company: T): this {
        this.data = company;
        
        return this;
    }

    public override getData<T>(): T | null {
        return this.data;
    }
}