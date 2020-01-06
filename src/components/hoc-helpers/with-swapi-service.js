import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context"

const WithSwapiService = (mapMethodToProps) => (Wrapped) => {
    return (...props) => (
        <SwapiServiceConsumer>
            {
                swapiService => {
                const getSWData = mapMethodToProps(swapiService);
                return <Wrapped {...props} getSWData={getSWData}/>;}
            }
        </SwapiServiceConsumer>
    );
};

export default WithSwapiService;