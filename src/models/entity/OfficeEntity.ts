import { Office } from '../../abstracts/office';

export default class OfficeEntity {
    private id: number;
    private companyId: number;
    private buildingId: number;
    private rentalPrice: number;
    private constructionYear: number;

    constructor({ id, companyId, buildingId, rentalPrice, constructionYear }: Office) {
        this.id = id;
        this.companyId = companyId;
        this.buildingId = buildingId;
        this.rentalPrice = rentalPrice;
        this.constructionYear = constructionYear;
    }

    public getId(): number {
        return this.id;
    }

    public getCompanyId(): number {
        return this.companyId;
    }

    public getBuildingId(): number {
        return this.buildingId;
    }

    public getRentalPrice(): number {
        return this.rentalPrice;
    }

    public getConstructionYear(): number {
        return this.constructionYear;
    }

    public getOffice(): Office {
        return {
            id: this.id,
            companyId: this.companyId,
            buildingId: this.buildingId,
            rentalPrice: this.rentalPrice,
            constructionYear: this.constructionYear,
        }
    }

    public getAsString(): string {
        return `Office info: id - ${this.id}, companyId - ${this.companyId}, buildingId - ${this.buildingId}, rentalPrice - ${this.rentalPrice}, constructionYear - ${this.constructionYear}`;
    }
}