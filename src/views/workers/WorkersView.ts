import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class WorkersView extends View implements IView {
    public override setData<T>(workers: T): this {
        this.data = workers;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}