import axios from "axios";
import Film from "../../type/film";
import Pagination from "../../type/pagination";

const fetchFilm = async (): Promise<Film[]> => {
    const films = await axios.get<Pagination<Film>>("https://swapi.dev/api/films/");
    return films.data.results;
}

export default fetchFilm;