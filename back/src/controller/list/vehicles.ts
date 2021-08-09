import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchVehicles from "../../fetch/list/vehicle";
import filter from "../filter";

const controllerVehiclesList = async (request: Hapi) => {
    try {
        const vehicles = await fetchVehicles();

        return {
            data: filter(vehicles,request.query)
        }
    }catch (err){
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the vehicles list');
    }
}

export default controllerVehiclesList;