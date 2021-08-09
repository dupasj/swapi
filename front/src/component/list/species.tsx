import React from "react";
import {Grid} from "@material-ui/core";
import Specy from "../../type/specy";
import SpecyItem from "./item/specy";

type SpeciesListProps = {
    species: Specy[]
};

class SpeciesList extends React.Component<SpeciesListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.species.map((specy,key) => (
                   <Grid sm={4} item key={key}>
                       <SpecyItem specy={specy}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default SpeciesList;