import View from '../View.js';
import { IView } from '../../abstracts/view.js';

export default class BuildingView extends View implements IView {
    public override setData<T>(building: T): this {
        this.data = building;
        
        return this;
    }

    public override getData<T>(): T | null {
        return this.data;
    }
}