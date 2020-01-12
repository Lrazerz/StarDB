import React from "react";
import {withRouter} from "react-router-dom";
import {Row} from "react-bootstrap";
import {PlanetsList} from "../../sw-components";

const PlanetsPage = ({history, match}) => {

        const {id} = match.params;

        return (
            <Row >
                <PlanetsList onItemSelected={(id) => history.push(`${id}`)}/>
            </Row>
        );
};

export default withRouter(PlanetsPage);