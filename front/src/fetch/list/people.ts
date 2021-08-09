import axios from "axios";
import People from "../../type/people";
import Data from "../../type/data";

const fetchPeople = async (filter?: URLSearchParams): Promise<People[]> => {
    const url = new URL("http://localhost:8000/peoples");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const peoples = await axios.get<Data<People[]>>(url.toString());
    return peoples.data.data;
}

export default fetchPeople;