import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers";

class PlanetsPage extends Component {
    state = {
        planetsList: [],
        loading: true
    };

    componentDidMount() {
        const {getAllPlanets} = this.props.getSWData;

        getAllPlanets().then(planetsList => this.setState({planetsList,loading: false}));
    }

    render = () => {
        if(this.state.loading) return <LoadingIndicator/>;

        const planetsList = this.state.planetsList
            .map(character => <li className="list-group-item">{character.name}</li>);
        return (
            <div>
                <ul className="list-group">
                    {planetsList}
                </ul>
            </div>);
    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllPlanets: swapiService.getAllPlanets
    }
};


export default withSwapiService(mapMethodsToProps)(PlanetsPage);