import React from "react";
import fetchFilms from "../../fetch/list/film";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import fetchSpecies from "../../fetch/list/specy";
import FilmsList from "../list/films";
import fetchPlanets from "../../fetch/list/planet";
import PlanetsList from "../list/planets";
import SpeciesList from "../list/species";
import fetchVehicle from "../../fetch/list/vehicle";
import VehiclesList from "../list/vehicles";
import fetchStarship from "../../fetch/list/starship";
import StarshipsList from "../list/starships";
import TitleType from "../util/title-type";
import fetchPeople from "../../fetch/list/people";
import PeoplesList from "../list/peoples";
import buildFilmSearch from "../../fetch/builder/film";
import buildPeopleSearch from "../../fetch/builder/people";
import buildStarshipSearch from "../../fetch/builder/starship";
import buildVehicleSearch from "../../fetch/builder/vehicle";
import buildSpecySearch from "../../fetch/builder/specy";
import buildPlanetSearch from "../../fetch/builder/planet";
import Search from "../util/search";

const loadAll = async () => {
    const [
        films,
        planets,
        starships,
        vehicles,
        species,
        peoples,
    ] = await Promise.all([
        fetchFilms(buildFilmSearch()),
        fetchPlanets(buildPlanetSearch()),
        fetchStarship(buildStarshipSearch()),
        fetchVehicle(buildVehicleSearch()),
        fetchSpecies(buildSpecySearch()),
        fetchPeople(buildPeopleSearch()),
    ])

    const children = [];
    if(films.length > 0){
        children.push(
            <div>
                <TitleType title={"Films"}/>
                <FilmsList films={films}/>
            </div>
        )
    }
    if(starships.length > 0){
        children.push(
            <div>
                <TitleType title={"Starships"}/>
                <StarshipsList starships={starships}/>
            </div>
        )
    }
    if(vehicles.length > 0){
        children.push(
            <div>
                <TitleType title={"Vehicles"}/>
                <VehiclesList vehicles={vehicles}/>
            </div>
        )
    }
    if(species.length > 0){
        children.push(
            <div>
                <TitleType title={"Species"}/>
                <SpeciesList species={species}/>
            </div>
        )
    }
    if(planets.length > 0){
        children.push(
            <div>
                <TitleType title={"Planets"}/>
                <PlanetsList planets={planets}/>
            </div>
        )
    }
    if(peoples.length > 0){
        children.push(
            <div>
                <TitleType title={"Peoples"}/>
                <PeoplesList peoples={peoples}/>
            </div>
        )
    }

    return (
        <div>
            { children }
        </div>
    )
};

class IndexPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <div style={{display: "flex",justifyContent: "center",alignContent: "center",minHeight: "100vh"}}>
                        <Loader loader={loadAll}/>
                    </div>
                </Search>
            </Container>
        );
    }
}

export default IndexPage;