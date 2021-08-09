import React from "react";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import fetchSpecies from "../../fetch/list/specy";
import SpeciesList from "../list/species";
import TitleType from "../util/title-type";
import buildSpecySearch from "../../fetch/builder/specy";
import Search from "../util/search";

const loadSpecies = async () => {
    const species = await fetchSpecies(buildSpecySearch());

    return (
        <div>
            <TitleType title={"Species"}/>
            <SpeciesList species={species}/>
        </div>
    )
};

class SpeciesPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadSpecies}/>
                </Search>
            </Container>
        );
    }
}

export default SpeciesPage;