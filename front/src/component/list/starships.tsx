import React from "react";
import {Grid} from "@material-ui/core";
import Starship from "../../type/starship";
import StarshipItem from "./item/starship";

type StarshipsListProps = {
    starships: Starship[]
};

class StarshipsList extends React.Component<StarshipsListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.starships.map((starship,key) => (
                   <Grid sm={4} item key={key}>
                       <StarshipItem starship={starship}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default StarshipsList;