import React from "react";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import fetchStarship from "../../fetch/list/starship";
import StarshipsList from "../list/starships";
import TitleType from "../util/title-type";
import buildStarshipSearch from "../../fetch/builder/starship";
import Search from "../util/search";

const loadStarships = async () => {
    const starships = await fetchStarship(buildStarshipSearch());

    return (
        <div>
            <TitleType title={"Starships"}/>
            <StarshipsList starships={starships}/>
        </div>
    )
};

class StarshipsPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadStarships}/>
                </Search>
            </Container>
        );
    }
}

export default StarshipsPage;