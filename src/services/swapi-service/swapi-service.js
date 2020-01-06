export default class SwapiService {

    // characters - people

    imageBasePath = "https://starwars-visualguide.com/assets/img/";//.jpg

    getResource = async (path = "") => {
        const basePath = "https://swapi.co/api/";
        const fullPath = basePath + path;

        const resource = await fetch(fullPath);
        if(!resource.ok) throw new Error(`Can't fetch resource ${fullPath}, ` +
        `returned status ${resource.status}`);

        return await resource.json();
    };
    getAllCharacters = async () => {
        const people = await this.getResource(`people/`);
        return people.results;
    };
    getAllPlanets = async () => {
        const planets = await this.getResource(`planets/`);
        return planets.results;
    };
    getAllStarships = async () => {
        const starships = await this.getResource(`starships/`);
        return starships.results;
    };
    getCharacter = async (id) => {
        const character = await this.getResource(`people/${id}`);
        return character;
    };
    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}`);
        return this.transformPlanet(planet);
    };
    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}`);
        return starship;
    };

    getCharacterImgUrl = (id) => {
        return this.imageBasePath + `/people/${id}.jpg`;
    };
    getPlanetImgUrl = (id) => {
        return this.imageBasePath + `/planets/${id}.jpg`;
    };
    getStarshipImgUrl = (id) => {
        return this.imageBasePath + `/starships/${id}.jpg`;
    };

    pullIdFromUrl = (url) => {
        //return id
        return url.match(/(people|planets|starships)\/(\d+)/)[2];
    };

    transformCharacter = (planet) => {
        return {

        }
    };
    transformPlanet = (planet) => {
        const id = this.pullIdFromUrl(planet.url);
        return {
            id,
            imageUrl: this.getPlanetImgUrl(id),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
            climate: planet.climate
        }
    };
    transformStarship = (planet) => {
        return {

        }
    };



};