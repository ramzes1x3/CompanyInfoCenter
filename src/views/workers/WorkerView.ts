import { IView } from '../../abstracts/view.js';
import View from '../View.js';

export default class WorkerView extends View implements IView {
    public override setData<T>(worker: T): this {
        this.data = worker;
        
        return this;
    }

    public override getData<T>(): T | null {
        return this.data;
    }
}