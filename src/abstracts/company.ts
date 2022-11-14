export interface DbCompany {
    id: number, 
    name: string,
    number_of_employees: number,
    foundation_year: number,
}

export interface Company {
    id: number, 
    name: string,
    numberOfEmployees: number,
    foundationYear: number,
}

export interface ICompanyResource {
    getCompanies: () => Promise<DbCompany[]>,
    getCompanyById: (id: string) => Promise<DbCompany | null>,
    addCompany: (company: Company) => Promise<void>,
    changeCompany: (company: Company) => Promise<void>,
    deleteCompany: (id: string) => Promise<number>,
}

export interface ICompanyService {
    getCompanyById: (id: number | string) => Promise<Company>,
    getCompanies: () => Promise<Company[]>,
    addCompany: (company: Company) => Promise<void>,
    changeCompany: (company: Company) => Promise<void>,
    deleteCompanyById: (id: number | string) => Promise<void>,
    validateCompanyId: (id: number | string) => Promise<void>,
}