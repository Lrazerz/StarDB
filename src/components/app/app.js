import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./app.css";

import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";

import Header from "../header";
import LoadingIndicator from "../loading-indicator";
import CharactersPage from "../pages/characters-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";
import RandomPlanet from "../random-planet";

import ErrorBoundary from "../error-boundary";

const swapiService = new SwapiService();

export default class App extends Component {

    render = () => {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <BrowserRouter>
                        <Header/>
                        <RandomPlanet/>
                        <Switch>
                            <Route path="/characters/">
                                <CharactersPage/>
                            </Route>
                            <Route path="/planets/">
                                <PlanetsPage/>
                            </Route>
                            <Route path="/starships/">
                                <StarshipsPage/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };
}

