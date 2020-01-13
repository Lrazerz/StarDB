import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./app.scss";

import SwapiService from "../../services/swapi-service";

import {SwapiServiceProvider} from "../swapi-service-context";

import Header from "../header";
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
                            <Route path="/characters/:id?">
                                <CharactersPage/>
                            </Route>
                            <Route path="/planets/:id?">
                                <PlanetsPage/>
                            </Route>
                            <Route path="/starships/:id?">
                                <StarshipsPage/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    };
}

