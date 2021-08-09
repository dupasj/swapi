import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import Planet from "../../../type/planet";

type PlanetItemProps = {
    planet: Planet
};

class PlanetItem extends React.Component<PlanetItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.planet.name}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.planet.population}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/films?planets="+this.props.planet.url}>Films</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/peoples?planets="+this.props.planet.url}>Peoples</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/species?planets="+this.props.planet.url}>Species</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/starships?planets="+this.props.planet.url}>Starships</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/vehicles?planets="+this.props.planet.url}>Vehicles</Button>
              </CardActions>
          </Card>
        );
    }
}

export default PlanetItem;