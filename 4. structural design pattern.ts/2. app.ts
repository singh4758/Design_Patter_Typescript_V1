import { CountryRepository, Continent } from "./2. countriesRepository";

let countriesRepo = new CountryRepository();

countriesRepo.allByCurrency("EUR").then((euroCountries) => {
  console.log('Euro Countries', euroCountries);
})

countriesRepo.allByContinent(Continent.NorthAmerica).then((northAmerica) => {
  console.log("No of country north America stored", northAmerica.length);
})