import axios from "axios";
import Vehicle from "../../type/vehicle";
import Data from "../../type/data";

const fetchVehicle = async (filter?: URLSearchParams): Promise<Vehicle[]> => {
    const url = new URL("http://localhost:8000/vehicles");

    if (typeof filter !== "undefined"){
        for(const key of Array.from(filter.keys())){
            for(const value of Array.from(filter.getAll(key))){
                url.searchParams.append(key,value);
            }
        }
    }

    const vehicles = await axios.get<Data<Vehicle[]>>(url.toString());
    return vehicles.data.data;
}

export default fetchVehicle;