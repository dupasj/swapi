import axios from "axios";
import Specy from "../../type/specy";
import Pagination from "../../type/pagination";

const fetchStarship = async (): Promise<Specy[]> => {
    const films = await axios.get<Pagination<Specy>>("https://swapi.dev/api/starships/");
    return films.data.results;
}

export default fetchStarship;