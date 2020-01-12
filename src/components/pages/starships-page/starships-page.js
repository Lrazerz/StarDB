import React from "react";
import {withRouter} from "react-router-dom";
import {Row} from "react-bootstrap";
import {StarshipsList} from "../../sw-components";

const StarshipsPage = ({history, match}) => {

    const {id} = match.params;

    return (
        <Row >
            <StarshipsList onItemSelected={(id) => history.push(`${id}`)}/>
        </Row>
    );
};

export default withRouter(StarshipsPage);