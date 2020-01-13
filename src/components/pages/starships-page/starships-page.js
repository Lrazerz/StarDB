import React from "react";
import {withRouter} from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import {StarshipsList,StarshipDetails} from "../../sw-components";

const StarshipsPage = ({history, match: {params: {id}}}) => {

    return (
        <Row>
            <Col><StarshipsList onItemSelected={(id) => history.push(`${id}`)}/></Col>
            <Col><StarshipDetails itemId={id}/></Col>
        </Row>
    );
};

export default withRouter(StarshipsPage);