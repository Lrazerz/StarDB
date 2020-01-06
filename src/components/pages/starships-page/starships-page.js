import React, {Component} from "react";
import LoadingIndicator from "../../loading-indicator";
import withSwapiService from "../../hoc-helpers";
import ItemList from "../../item-list";

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
        return <ItemList itemList={this.state.starshipsList}/>
    };
}

const mapMethodsToProps = (swapiService) => {
    return {
        getAllStarships: swapiService.getAllStarships
    }
};


export default withSwapiService(mapMethodsToProps)(StarshipsPage);