import * as Hapi from "@hapi/hapi";
import routeFilmsList from "./film";
import routePeoplesList from "./people";
import routePlanetsList from "./planet";
import routeSpeciesList from "./specy";
import routeStarshipsList from "./starship";
import routeVehiclesList from "./vehicles";

const routeList = (server: Hapi) => {
    routeFilmsList(server);
    routePeoplesList(server);
    routePlanetsList(server);
    routeSpeciesList(server);
    routeStarshipsList(server);
    routeVehiclesList(server);
}

export default routeList;