import * as Hapi from "@hapi/hapi";
import controllerPlanetsList from "../../controller/list/planet";

const routePlanetsList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/planets',
        handler: controllerPlanetsList
    });
}

export default routePlanetsList;