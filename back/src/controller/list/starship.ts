import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchStarship from "../../fetch/list/starship";
import filter from "../filter";

const controllerStarshipsList = async (request: Hapi) => {
    try {
        const starships = await fetchStarship();

        return {
            data: filter(starships,request.query)
        }
    }catch (err){
        if (Boom.isBoom(err)){
            throw err;
        }
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the starships list');
    }
}

export default controllerStarshipsList;