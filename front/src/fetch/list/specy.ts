import axios from "axios";
import Specy from "../../type/specy";
import Data from "../../type/data";

const fetchSpecies = async (filter?: URLSearchParams): Promise<Specy[]> => {
    const url = new URL("http://localhost:8000/species");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const species = await axios.get<Data<Specy[]>>(url.toString());
    return species.data.data;
}

export default fetchSpecies;