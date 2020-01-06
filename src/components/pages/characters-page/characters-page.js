import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers"
import ItemList from "../../item-list";
import ItemDetails from "../../item-details";

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
        return (
            <div className="row">
                <div className="col-sm"><ItemList itemList={this.state.charactersList}/></div>
                <div className="col-sm">
                    <ItemDetails item={this.state.charactersList[3]}>
                        <Record field="name"/>
                        <Record fieldLabel="Height" field="height"/>
                        <Record fieldLabel="Mass" field="mass"/>
                    </ItemDetails>
                </div>
            </div>)

    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllCharacters: swapiService.getAllCharacters
    }
};

const Record = ({fieldLabel,field,item}) =>
    <li className="list-group-item"><span className="term">{fieldLabel} </span><span>{item[field]}</span></li>;


export default withSwapiService(mapMethodsToProps)(CharactersPage);