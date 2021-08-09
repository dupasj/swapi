import * as Hapi from "@hapi/hapi";
import controllerStarshipsList from "../../controller/list/starship";

const routeStarshipsList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/starships',
        handler: controllerStarshipsList
    });
}

export default routeStarshipsList;