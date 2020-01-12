import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const getDataProps = mapMethodsToProps(swapiService);

                        return (
                            <Wrapped {...props} {...getDataProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
};

export default withSwapiService;