import React, {Component} from "react";
import {withSwapiService} from "../hoc-helpers";
import LoadingIndicator from "../loading-indicator";

import "./random-planet.scss"

class RandomPlanet extends Component {
    state = {
        planet: {
            name:"",
            imageUrl: "",
            diameter:0,
            population:0,
            climate:0
        },
        loading: true
    };

    updatePlanet = () => {
        const {getPlanet} = this.props;
        const randomId = Math.ceil(Math.random()*10);
        this.setState({loading:true});
        getPlanet(randomId).then(planet => this.setState({planet,loading:false}));
    };


    componentDidMount() {
        this.updatePlanet();
        this.planetUpdInterval = setInterval(this.updatePlanet,20000);
    }

    componentWillUnmount() {
        clearInterval(this.planetUpdInterval);
    }

    render = () => {
        const {loading,planet: {name,imageUrl,diameter,population,climate}} = this.state;

        if(loading) return <div className="random-planet"><LoadingIndicator/></div>;
        return (
            <div className="random-planet">
                <div className="planet-info-wrapper">
                    <img className="planet-image" src={imageUrl} alt="Image of planet"/>
                    <ul className="list-group description-list">
                        <li className="list-group-item description-list-item planet-name">
                            <span>{name}</span>
                        </li>
                        <li className="list-group-item description-list-item">
                            <span className="term">Diameter </span>
                            <span>{diameter}</span>
                        </li>
                        <li className="list-group-item description-list-item">
                            <span className="term">Population </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item description-list-item">
                            <span className="term">Climate </span>
                            <span>{climate}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
};

const mapMethodsToProps = (swapiService) => {
    return {
        getPlanet: swapiService.getPlanet
    }
};

export default withSwapiService(mapMethodsToProps)(RandomPlanet);
