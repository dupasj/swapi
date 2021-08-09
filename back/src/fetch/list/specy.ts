import axios from "axios";
import Specy from "../../type/specy";
import Pagination from "../../type/pagination";

const fetchSpecies = async (): Promise<Specy[]> => {
    const films = await axios.get<Pagination<Specy>>("https://swapi.dev/api/species/");
    return films.data.results;
}

export default fetchSpecies;