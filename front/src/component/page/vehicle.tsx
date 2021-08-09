import React from "react";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import fetchVehicle from "../../fetch/list/vehicle";
import VehiclesList from "../list/vehicles";
import TitleType from "../util/title-type";
import buildVehicleSearch from "../../fetch/builder/vehicle";
import Search from "../util/search";

const loadVehicles = async () => {
    const vehicles = await fetchVehicle(buildVehicleSearch());

    return (
        <div>
            <TitleType title={"Vehicles"}/>
            <VehiclesList vehicles={vehicles}/>
        </div>
    )
};

class VehiclesPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadVehicles}/>
                </Search>
            </Container>
        );
    }
}

export default VehiclesPage;