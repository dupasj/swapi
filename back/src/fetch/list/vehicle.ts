import axios from "axios";
import Vehicles from "../../type/vehicles";
import Pagination from "../../type/pagination";

const fetchVehicles = async (): Promise<Vehicles[]> => {
    const films = await axios.get<Pagination<Vehicles>>("https://swapi.dev/api/vehicles/");
    return films.data.results;
}

export default fetchVehicles;