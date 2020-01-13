import React from "react";
import {withSwapiService, withData, compose} from "../hoc-helpers";
import ItemDetails from "../item-details";

const RenderLabel = ({fieldName,field,item}) => {
    return (
        <li className="list-group-item" key={item.id}>
            <span className="term">{fieldName} </span><span>{item[field]}</span>
        </li>);
};


const mapCharacterMethodsToProps = (swapiService) => {
    return {getData: swapiService.getCharacter};
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {getData: swapiService.getPlanet};
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {getData: swapiService.getStarship};
};


const CharacterDetailsWithLabels = (props) => (
    <ItemDetails {...props}>
        <RenderLabel fieldName="Gender" field="gender"/>
        <RenderLabel fieldName="Height" field="height"/>
        <RenderLabel fieldName="Mass" field="mass"/>
    </ItemDetails>);

const PlanetDetailsWithLabels = (props) => (
    <ItemDetails {...props}>
        <RenderLabel fieldName="Diameter" field="diameter"/>
        <RenderLabel fieldName="Population" field="population"/>
        <RenderLabel fieldName="Climate" field="climate"/>
    </ItemDetails>);

const StarshipDetailsWithLabels = (props) => (
    <ItemDetails {...props}>
        <RenderLabel fieldName="Capacity" field="capacity"/>
        <RenderLabel fieldName="Length" field="length"/>
        <RenderLabel fieldName="Cost" field="cost"/>
    </ItemDetails>);


const CharacterDetails = compose(withSwapiService(mapCharacterMethodsToProps),withData)(CharacterDetailsWithLabels);

const PlanetDetails = compose(withSwapiService(mapPlanetMethodsToProps),withData)(PlanetDetailsWithLabels);

const StarshipDetails = compose(withSwapiService(mapStarshipMethodsToProps),withData)(StarshipDetailsWithLabels);

export {CharacterDetails,PlanetDetails,StarshipDetails};