import React from "react";
import {Container} from "@material-ui/core";
import Loader from "../util/loader";
import TitleType from "../util/title-type";
import fetchPeople from "../../fetch/list/people";
import PeoplesList from "../list/peoples";
import buildPeopleSearch from "../../fetch/builder/people";
import Search from "../util/search";

const loadPeoples = async () => {
    const peoples = await fetchPeople(buildPeopleSearch());

    return (
        <div>
            <TitleType title={"Peoples"}/>
            <PeoplesList peoples={peoples}/>
        </div>
    )
};

class PeoplesPage extends React.Component {
    render() {
        return (
            <Container>
                <Search>
                    <Loader loader={loadPeoples}/>
                </Search>
            </Container>
        );
    }
}

export default PeoplesPage;