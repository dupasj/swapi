import * as Hapi from "@hapi/hapi";
import routeList from "./list";

const route = (server: Hapi) => {
    routeList(server);
}

export default route;