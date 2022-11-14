export interface DbBuilding {
    id: number,
    city_id: number,
    street: string,
    house: string,
}

export interface Building {
    id: number,
    cityId: number,
    street: string,
    house: string,
}

export interface IBuildingResource {
    getBuildings: () => Promise<DbBuilding[]>,
    getBuildingById: (id: string) => Promise<DbBuilding | null>,
    getBuildingsByCityId: (cityId: string) => Promise<DbBuilding[]>,
    addBuilding: (building: Building) => Promise<void>,
    changeBuilding: (building: Building) => Promise<void>,
    deleteBuilding: (id: string) => Promise<number>,
}

export interface IBuildingService {
    getBuildingById: (id: number | string) => Promise<Building>,
    getBuildings: () => Promise<Building[]>,
    getBuildingsByCityName: (cityName: string) => Promise<Building[]>
    addBuilding: (company: Building) => Promise<void>,
    changeBuilding: (company: Building) => Promise<void>,
    deleteBuildingById: (id: number | string) => Promise<void>,
    validateBuildingId: (id: number | string) => Promise<void>,
}