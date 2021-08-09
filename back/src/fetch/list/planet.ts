import axios from "axios";
import Pagination from "../../type/pagination";
import Planet from "../../type/planet";

const fetchPlanets = async (): Promise<Planet[]> => {
    const films = await axios.get<Pagination<Planet>>("https://swapi.dev/api/planets/");
    return films.data.results;
}

export default fetchPlanets;