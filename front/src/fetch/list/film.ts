import axios from "axios";
import Film from "../../type/film";

import Data from "../../type/data";


const fetchFilm = async (filter?: URLSearchParams): Promise<Film[]> => {
    const url = new URL("http://localhost:8000/films");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const films = await axios.get<Data<Film[]>>(url.toString());
    return films.data.data;
}

export default fetchFilm;