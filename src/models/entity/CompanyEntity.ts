import { Company } from '../../abstracts/company';

export default class CompanyEntity {
    private id: number; 
    private name: string;
    private numberOfEmployees: number;
    private foundationYear: number;

    constructor({ id, name, numberOfEmployees, foundationYear }: Company) {
        this.id = id;
        this.name = name;
        this.numberOfEmployees = numberOfEmployees;
        this.foundationYear = foundationYear;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getNumberOfEmployees(): number {
        return this.numberOfEmployees;
    }

    public getFoundationYear(): number {
        return this.foundationYear;
    }

    public getCompany(): Company {
        return {
            id: this.id,
            name: this.name,
            numberOfEmployees: this.numberOfEmployees,
            foundationYear: this.foundationYear,
        }
    }

    public getAsString(): string {
        return `Company info: id - ${this.id}, name - ${this.name}, numberOfEmployees - ${this.numberOfEmployees}, foundationYear - ${this.foundationYear}`;
    }
}