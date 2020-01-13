import React from "react";
import {withRouter} from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import {CharactersList,CharacterDetails} from "../../sw-components";

const CharactersPage = ({history, match: {params: {id}}}) => {

    return (
        <Row >
            <Col><CharactersList onItemSelected={(id) => history.push(`${id}`)}/></Col>
            <Col><CharacterDetails itemId={id}/></Col>
        </Row>
    );
};

export default withRouter(CharactersPage);