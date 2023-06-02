import { Country } from "./2. country";
import fs from "fs";

export enum Continent {
  Africa = "Africa",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "NorthAmerica",
  SouthAmerica = "SouthAmerica",
  Oceania = "Oceania",
}

export class CountryRepository {
  async all(): Promise<Country[]> {
    return Promise.all([
      Continent.Africa,
      Continent.Asia,
      Continent.Europe,
      Continent.NorthAmerica,
      Continent.SouthAmerica,
      Continent.Oceania,
    ].map((continent) => this.allByContinent(continent))).then((results) => {
      let consolidate: Country[] = [];
      results.forEach((result) => {
        consolidate.push(...result);
      });
      return consolidate;
    });
  }

  async allByContinent(continent: Continent): Promise<Country[]> {
    return new Promise<Country[]>((resolve, reject) => {
      fs.readFile(this.continentToFileName(continent), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let countries: Country[] = JSON.parse(data);
          resolve(countries);
        }
      });
    });
  }

  async allByCurrency(currency: string): Promise<Country[]> {
    let all = await this.all();

    return all.filter((country) => country.currency === currency );
  }

  private continentToFileName(continent: Continent) {
    let prefix = "2. countries/";
    let filesName: any = {};
    filesName[Continent.Africa] = "2. africa.json";
    filesName[Continent.Asia] = "2. asia.json";
    filesName[Continent.SouthAmerica] = "2. southAmerica.json";
    filesName[Continent.NorthAmerica] = "2. northAmerica.json";
    filesName[Continent.Europe] = "2. Europe.json";
    filesName[Continent.Oceania] = "2. Oceania.json";

    return prefix + filesName[Continent[continent]];
  }
}
