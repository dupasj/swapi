import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import IndexPage from "./component/page";
import FilmsPage from "./component/page/film";
import PeoplesPage from "./component/page/people";
import PlanetsPage from "./component/page/planet";
import StarshipsPage from "./component/page/starship";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SpeciesPage from "./component/page/specy";
import VehiclesPage from "./component/page/vehicle";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path={"/starships"} component={StarshipsPage}/>
              <Route exact path={"/planets"} component={PlanetsPage}/>
              <Route exact path={"/peoples"} component={PeoplesPage}/>
              <Route exact path={"/films"} component={FilmsPage}/>
              <Route exact path={"/species"} component={SpeciesPage}/>
              <Route exact path={"/vehicles"} component={VehiclesPage}/>
              <Route exact path={"/all"} component={IndexPage}/>
              <Route exact path={"/"} component={IndexPage}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
