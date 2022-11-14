import { Country, DbCountry } from "../abstracts/country";

export default class CountryConverter {
    public static convertDbCountry({ id, name, prestige, }: DbCountry): Country {
        return {
            id,
            name,
            prestige,
        }
    }

    public static convertDbCountries(dbCountries: DbCountry[]): Country[] {
        return dbCountries.map(this.convertDbCountry);
    }
}