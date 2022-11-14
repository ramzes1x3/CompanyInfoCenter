export interface DbOffice {
    id: number,
    company_id: number,
    building_id: number,
    rental_price: number,
    construction_year: number,
}

export interface Office {
    id: number,
    companyId: number,
    buildingId: number,
    rentalPrice: number,
    constructionYear: number,
}

export interface IOfficeResource {
    getOffices: () => Promise<DbOffice[]>,
    getOfficeById: (id: string) => Promise<DbOffice | null>,
    addOffice: (office: Office) => Promise<void>,
    changeOffice: (office: Office) => Promise<void>,
    deleteOffice: (id: string) => Promise<number>,
}

export interface IOfficeService {
    getOfficeById: (id: number | string) => Promise<Office>,
    getOffices: () => Promise<Office[]>,
    addOffice: (company: Office) => Promise<void>,
    changeOffice: (company: Office) => Promise<void>,
    deleteOfficeById: (id: number | string) => Promise<void>,
    validateOfficeId: (id: number | string) => Promise<void>,
}