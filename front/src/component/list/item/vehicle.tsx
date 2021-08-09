import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import vehicle from "../../../type/vehicle";

type VehicleItemProps = {
    vehicle: vehicle
};

class VehicleItem extends React.Component<VehicleItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.vehicle.name}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.vehicle.vehicle_class} - {this.props.vehicle.manufacturer}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/films?vehicles="+this.props.vehicle.url}>Films</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/peoples?vehicles="+this.props.vehicle.url}>Peoples</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/planets?vehicles="+this.props.vehicle.url}>Planets</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/species?vehicles="+this.props.vehicle.url}>Species</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/starships?vehicles="+this.props.vehicle.url}>Starships</Button>
              </CardActions>
          </Card>
        );
    }
}

export default VehicleItem;