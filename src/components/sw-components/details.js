import React from "react";
import {withSwapiService, withData, compose} from "../hoc-helpers";
import ItemList from "../item-list";

const mapCharacterMethodsToProps = (swapiService) => {
    return {getData: swapiService.getCharacter};
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {getData: swapiService.getPlanet};
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {getData: swapiService.getStarship};
};

const CharacterDetails = compose(withSwapiService(mapCharacterMethodsToProps),withData(ItemList));

const PlanetDetails = compose(withSwapiService(mapPlanetMethodsToProps),withData)(ItemList);

const StarshipDetails = compose(withSwapiService(mapStarshipMethodsToProps),withData(ItemList));

export {CharacterDetails,PlanetDetails,StarshipDetails};