import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class CompaniesView extends View implements IView {
    public override setData<T>(companies: T): this {
        this.data = companies;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}