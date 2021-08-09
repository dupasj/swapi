import React from "react";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import fetchPlanets from "../../fetch/list/planet";
import PlanetsList from "../list/planets";
import TitleType from "../util/title-type";
import buildPlanetSearch from "../../fetch/builder/planet";
import Search from "../util/search";

const loadPlanets = async () => {
    const planets = await fetchPlanets(buildPlanetSearch());

    return (
        <div>
            <TitleType title={"Planets"}/>
            <PlanetsList planets={planets}/>
        </div>
    )
};

class PlanetsPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadPlanets}/>
                </Search>
            </Container>
        );
    }
}

export default PlanetsPage;