import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import People from "../../../type/people";

type PeopleItemProps = {
    people: People
};

class PeopleItem extends React.Component<PeopleItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.people.name}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.people.gender}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/films?characters="+this.props.people.url}>Films</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/planets?characters="+this.props.people.url}>Planets</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/species?characters="+this.props.people.url}>Species</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/starships?characters="+this.props.people.url}>Starships</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/vehicles?characters="+this.props.people.url}>Vehicles</Button>
              </CardActions>
          </Card>
        );
    }
}

export default PeopleItem;