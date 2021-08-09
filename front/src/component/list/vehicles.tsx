import React from "react";
import {Grid} from "@material-ui/core";
import VehicleItem from "./item/vehicle";
import Vehicle from "../../type/vehicle";

type VehiclesListProps = {
    vehicles: Vehicle[]
};

class VehiclesList extends React.Component<VehiclesListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.vehicles.map((vehicle,key) => (
                   <Grid sm={4} item key={key}>
                       <VehicleItem vehicle={vehicle}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default VehiclesList;