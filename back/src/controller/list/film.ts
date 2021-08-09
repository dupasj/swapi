import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchFilm from "../../fetch/list/film";
import filter from "../filter";

const controllerFilmsList = async (request: Hapi) => {
    try {
        const films = await fetchFilm();

        return {
            data: filter(films,request.query)
        }
    }catch (err){
        if (Boom.isBoom(err)){
            throw err;
        }
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the films list');
    }
}

export default controllerFilmsList;