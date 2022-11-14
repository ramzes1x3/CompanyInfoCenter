import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class OfficeView extends View implements IView {
    public override setData<T>(office: T): this {
        this.data = office;
        
        return this;
    }

    public override getData<T>(): T | null {
        return this.data;
    }
}