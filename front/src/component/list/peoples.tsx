import React from "react";
import {Grid} from "@material-ui/core";
import People from "../../type/people";
import PeopleItem from "./item/people";

type PeoplesListProps = {
    peoples: People[]
};

class PeoplesList extends React.Component<PeoplesListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.peoples.map((people,key) => (
                   <Grid sm={4} item key={key}>
                       <PeopleItem people={people}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default PeoplesList;