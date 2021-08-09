import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchPlanets from "../../fetch/list/planet";
import filter from "../filter";

const controllerPlanetsList = async (request: Hapi) => {
    try {
        const planets = await fetchPlanets();

        return {
            data: filter(planets,request.query)
        }
    }catch (err){
        if (Boom.isBoom(err)){
            throw err;
        }
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the planets list');
    }
}

export default controllerPlanetsList;