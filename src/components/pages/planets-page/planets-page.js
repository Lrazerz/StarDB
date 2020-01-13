import React from "react";
import {withRouter} from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import {PlanetsList,PlanetDetails} from "../../sw-components";

const PlanetsPage = ({history, match: {params: {id}}}) => {

        return (
            <Row >
                <Col><PlanetsList onItemSelected={(id) => history.push(`${id}`)}/></Col>
                <Col><PlanetDetails itemId={id}/></Col>
            </Row>
        );
};

export default withRouter(PlanetsPage);