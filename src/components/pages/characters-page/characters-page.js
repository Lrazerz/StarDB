import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers"

import "./characters-page.scss";

class CharactersPage extends Component {
    state = {
        charactersList: [],
        loading: true
    };

    componentDidMount() {
        const {getAllCharacters} = this.props.getSWData;

        getAllCharacters().then(charactersList => this.setState({charactersList,loading: false}));
    }

    render = () => {
        if(this.state.loading) return <LoadingIndicator/>;

        const charactersList = this.state.charactersList
            .map(character => <li className="list-group-item">{character.name}</li>);
        return (
            <div>
                <ul className="list-group">
                    {charactersList}
                </ul>
            </div>);
    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllCharacters: swapiService.getAllCharacters
    }
};


export default withSwapiService(mapMethodsToProps)(CharactersPage);