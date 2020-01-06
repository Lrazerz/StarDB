import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers";

class StarshipsPage extends Component {
    state = {
        starshipsList: [],
        loading: true
    };

    componentDidMount() {
        const {getAllStarships} = this.props.getSWData;

        getAllStarships().then(starshipsList => this.setState({starshipsList,loading: false}));
    }

    render = () => {
        if(this.state.loading) return <LoadingIndicator/>;

        const starshipsList = this.state.starshipsList
            .map(character => <li className="list-group-item">{character.name}</li>);
        return (
            <div>
                <ul className="list-group">
                    {starshipsList}
                </ul>
            </div>);
    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllStarships: swapiService.getAllStarships
    }
};


export default withSwapiService(mapMethodsToProps)(StarshipsPage);