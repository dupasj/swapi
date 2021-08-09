import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";
import Specy from "../../../type/specy";

type VehicleItemProps = {
    specy: Specy
};
class SpecyItem extends React.Component<VehicleItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.specy.name}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.specy.classification} - {this.props.specy.language}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/films?specy="+this.props.specy.url}>Films</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/peoples?specy="+this.props.specy.url}>Peoples</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/planets?specy="+this.props.specy.url}>Planets</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/starships?specy="+this.props.specy.url}>Starships</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/vehicles?specy="+this.props.specy.url}>Vehicles</Button>
              </CardActions>
          </Card>
        );
    }
}

export default SpecyItem;