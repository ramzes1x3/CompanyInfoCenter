import { Country } from '../../abstracts/country.js';
import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class CountriesView extends View implements IView {
    public override setData<T>(countries: T): this {
        this.data = countries;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}