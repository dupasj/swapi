import * as Hapi from "@hapi/hapi";
import controllerSpeciesList from "../../controller/list/specy";

const routeSpeciesList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/species',
        handler: controllerSpeciesList
    });
}

export default routeSpeciesList;