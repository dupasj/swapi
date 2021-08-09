import * as Hapi from "@hapi/hapi";
import controllerVehiclesList from "../../controller/list/vehicles";

const routeVehiclesList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/vehicles',
        handler: controllerVehiclesList
    });
}

export default routeVehiclesList;