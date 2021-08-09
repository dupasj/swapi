import React from "react";
import fetchFilms from "../../fetch/list/film";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import FilmsList from "../list/films";
import TitleType from "../util/title-type";
import buildFilmSearch from "../../fetch/builder/film";
import Search from "../util/search";

const loadFilms = async () => {
    const films = await fetchFilms(buildFilmSearch());

    return (
        <div>
            <TitleType title={"Films"}/>
            <FilmsList films={films}/>
        </div>
    )
};

class FilmsPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadFilms}/>
                </Search>
            </Container>
        );
    }
}

export default FilmsPage;