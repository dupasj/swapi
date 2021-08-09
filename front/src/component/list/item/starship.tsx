import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import Starship from "../../../type/starship";

type StarshipItemProps = {
    starship: Starship
};

class StarshipItem extends React.Component<StarshipItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.starship.name}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.starship.model} - {this.props.starship.manufacturer} - {this.props.starship.cargo_capacity}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/films?starships="+this.props.starship.url}>Films</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/peoples?starships="+this.props.starship.url}>Peoples</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/planets?starships="+this.props.starship.url}>Planets</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/species?starships="+this.props.starship.url}>Species</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/vehicles?starships="+this.props.starship.url}>Vehicles</Button>
              </CardActions>
          </Card>
        );
    }
}

export default StarshipItem;