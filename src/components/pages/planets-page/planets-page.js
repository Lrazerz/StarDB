import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers";
import ItemList from "../../item-list";

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
        return <ItemList itemList={this.state.planetsList}/>
    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllPlanets: swapiService.getAllPlanets
    }
};


export default withSwapiService(mapMethodsToProps)(PlanetsPage);