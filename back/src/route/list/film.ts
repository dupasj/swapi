import * as Hapi from "@hapi/hapi";
import controllerFilmsList from "../../controller/list/film";

const routeFilmsList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/films',
        handler: controllerFilmsList
    });
}

export default routeFilmsList;