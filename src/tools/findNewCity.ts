import data from "../data/citiesData.json";

export  const newCity = () => {
    const citiesLength = data.cities.length;
    const randomCityIndex = Math.floor(Math.random() * citiesLength);
    const cityJSON = data.cities[randomCityIndex];
    const city = JSON.parse(JSON.stringify(cityJSON));
    return city;
};