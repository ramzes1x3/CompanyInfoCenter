import { City } from '../../abstracts/city.js';
import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class CitiesView extends View implements IView {
    public override setData<T>(cities: T): this {
        this.data = cities;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}