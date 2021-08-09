import React from "react";
import {Grid} from "@material-ui/core";
import Planet from "../../type/planet";
import PlanetItem from "./item/planet";

type PlanetsListProps = {
    planets: Planet[]
};

class PlanetsList extends React.Component<PlanetsListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.planets.map((planet,key) => (
                   <Grid sm={4} item key={key}>
                       <PlanetItem planet={planet}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default PlanetsList;