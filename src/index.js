import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import SwapiService from "./services/swapi-service";

const swapiService = new SwapiService();

ReactDOM.render(<App/>,document.getElementById("root"));



// swapiService.getAllPlanets().then(data => console.log(data));
//
// console.log(swapiService.pullIdFromUrl(`swapi.co/api/planets/21/`));