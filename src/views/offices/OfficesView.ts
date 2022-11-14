import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class OfficesView extends View implements IView {
    public override setData<T>(offices: T): this {
        this.data = offices;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}