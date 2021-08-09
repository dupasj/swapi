import * as Hapi from "@hapi/hapi";
import * as Boom from "@hapi/boom";
import fetchPeople from "../../fetch/list/people";
import filter from "../filter";

const controllerPeoplesList = async (request: Hapi) => {
    try {
        const peoples = await fetchPeople();

        return {
            data: filter(peoples,request.query)
        }
    }catch (err){
        if (Boom.isBoom(err)){
            throw err;
        }
        console.error(err);
        throw Boom.badImplementation('An unknown error occurred while trying to found the peoples list');
    }
}

export default controllerPeoplesList;