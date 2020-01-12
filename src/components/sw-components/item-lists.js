import React from "react";
import {withSwapiService, withData, compose} from "../hoc-helpers";
import ItemList from "../item-list";

const mapCharacterMethodsToProps = (swapiService) => {
    return {getData: swapiService.getAllCharacters};
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {getData: swapiService.getAllPlanets};
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {getData: swapiService.getAllStarships};
};

const CharactersList = compose(withSwapiService(mapCharacterMethodsToProps),withData)(ItemList);

const PlanetsList = compose(withSwapiService(mapPlanetMethodsToProps),withData)(ItemList);

const StarshipsList = compose(withSwapiService(mapStarshipMethodsToProps),withData)(ItemList);

export {StarshipsList, PlanetsList, CharactersList};
