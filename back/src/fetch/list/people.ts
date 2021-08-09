import axios from "axios";
import People from "../../type/people";
import Pagination from "../../type/pagination";

const fetchPeople = async (): Promise<People[]> => {
    const films = await axios.get<Pagination<People>>("https://swapi.dev/api/people/");
    return films.data.results;
}

export default fetchPeople;