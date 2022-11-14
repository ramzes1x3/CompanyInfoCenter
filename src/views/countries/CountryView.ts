import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class CountryView extends View implements IView {
    public override setData<T>(country: T): this {
        this.data = country;
        
        return this;
    }

    public override getData<T>(): T | null {
        return this.data;
    }
}