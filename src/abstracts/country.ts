export interface DbCountry {
    id: number,
    name: string,
    prestige: string,
}

export interface Country {
    id: number,
    name: string,
    prestige: string,
}

export interface ICountryResource {
    getCountries: () => Promise<DbCountry[]>,
    getCountryById: (id: string) => Promise<DbCountry | null>,
}