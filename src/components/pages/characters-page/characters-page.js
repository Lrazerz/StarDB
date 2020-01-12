import React from "react";
import {withRouter} from "react-router-dom";
import {Row} from "react-bootstrap";
import {CharactersList} from "../../sw-components";

const CharactersPage = ({history, match}) => {

    const {id} = match.params;

    return (
        <Row >
            <CharactersList onItemSelected={(id) => history.push(`${id}`)}/>
        </Row>
    );
};

export default withRouter(CharactersPage);