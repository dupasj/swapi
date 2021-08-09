import axios from "axios";
import Data from "../../type/data";
import Starship from "../../type/starship";

const fetchStarship = async (filter?: URLSearchParams): Promise<Starship[]> => {
    const url = new URL("http://localhost:8000/starships");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const starships = await axios.get<Data<Starship[]>>(url.toString());
    return starships.data.data;
}

export default fetchStarship;