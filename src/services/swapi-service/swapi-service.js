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
        return people.results.map(item => this._transformCharacter(item));
    };
    getAllPlanets = async () => {
        const planets = await this.getResource(`planets/`);
        return planets.results.map(item => this._transformPlanet(item));
    };
    getAllStarships = async () => {
        const starships = await this.getResource(`starships/`);
        return starships.results.map(item => this._transformStarship(item));
    };
    getCharacter = async (id) => {
        const character = await this.getResource(`people/${id}`);
        return this._transformCharacter(character);
    };
    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}`);
        return this._transformPlanet(planet);
    };
    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}`);
        return this._transformStarship(starship);
    };

    getCharacterImgUrl = (id) => {
        return this.imageBasePath + `characters/${id}.jpg`;
    };
    getPlanetImgUrl = (id) => {
        return this.imageBasePath + `planets/${id}.jpg`;
    };
    getStarshipImgUrl = (id) => {
        return this.imageBasePath + `starships/${id}.jpg`;
    };

    pullIdFromUrl = (url) => {
        //return id
        return url.match(/(people|planets|starships)\/(\d+)/)[2];
    };

    _transformCharacter = (character) => {
        const id = this.pullIdFromUrl(character.url);
        return {
            id,
            imageUrl: this.getCharacterImgUrl(id),
            name: character.name,
            gender: character.gender,
            height: character.height,
            mass: character.mass
        };
    };
    _transformPlanet = (planet) => {
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
    _transformStarship = (starship) => {
        const id = this.pullIdFromUrl(starship.url);
        return {
            id,
            imageUrl: this.getCharacterImgUrl(id),
            name: starship.name,
            capacity: starship.cargo_capacity,
            length: starship.length,
            cost: starship.cost_in_credits
        };
    };
};