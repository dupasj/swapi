import axios from "axios";
import Data from "../../type/data";
import Planet from "../../type/planet";

const fetchPlanets = async (filter?: URLSearchParams): Promise<Planet[]> => {
    const url = new URL("http://localhost:8000/planets");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const planets = await axios.get<Data<Planet[]>>(url.toString());
    return planets.data.data;
}

export default fetchPlanets;