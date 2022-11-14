import { City, DbCity } from "../abstracts/city";

export default class CityConverter {
    public static convertDbCity({ id, name, country_id, }: DbCity): City {
        return {
            id,
            name,
            countryId: country_id,
        }
    }

    public static convertDbCities(dbCities: DbCity[]): City[] {
        return dbCities.map(this.convertDbCity);
    }
}