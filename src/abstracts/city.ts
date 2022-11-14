export interface DbCity {
    id: number,
    name: string,
    country_id: number,
}

export interface City {
    id: number,
    name: string,
    countryId: number,
}

export interface ICityResource {
    getCities: () => Promise<DbCity[]>,
    getCityByName: (cityName: string) => Promise<DbCity | null>,
}