import { Building } from '../../abstracts/building.js';

export default class BuildingEntity {
    private id: number;
    private cityId: number;
    private street: string;
    private house: string;

    constructor({ id, cityId, street, house }: Building) {
        this.id = id;
        this.cityId = cityId;
        this.street = street;
        this.house = house;
    }

    public getId(): number {
        return this.id;
    }

    public getCityId(): number {
        return this.cityId;
    }

    public getName(): string {
        return this.street;
    }

    public getHouse(): string {
        return this.house;
    }

    public getBuilding(): Building {
        return {
            id: this.id,
            cityId: this.cityId,
            street: this.street,
            house: this.house,
        }
    }

    public getAsString(): string {
        return `Building info: id - ${this.id}, cityId - ${this.cityId}, street - ${this.street}, house - ${this.house}`;
    }
}