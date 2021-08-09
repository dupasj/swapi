import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchSpecies from "../../fetch/list/specy";
import filter from "../filter";

const controllerSpeciesList = async (request: Hapi) => {
    try {
        const species = await fetchSpecies();

        return {
            data: filter(species,request.query)
        }
    }catch (err){
        if (Boom.isBoom(err)){
            throw err;
        }
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the species list');
    }
}

export default controllerSpeciesList;