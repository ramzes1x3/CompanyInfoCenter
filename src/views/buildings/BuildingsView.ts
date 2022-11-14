import View from '../View.js';
import { IView } from '../../abstracts/view.js';

export default class BuildingsView extends View implements IView {
    public override setData<T>(buildings: T): this {
        this.data = buildings;
        
        return this;
    }

    public override getData<T>(): T {
        return this.data;
    }
}