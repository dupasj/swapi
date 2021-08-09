import * as Hapi from "@hapi/hapi";
import controllerPeoplesList from "../../controller/list/people";

const routePeoplesList = (server: Hapi) => {
    server.route({
        method: 'GET',
        path: '/peoples',
        handler: controllerPeoplesList
    });
}

export default routePeoplesList;