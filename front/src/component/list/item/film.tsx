import React from "react";
import Film from "../../../type/film";
import {Button, Card, CardActions, CardContent, Typography} from "@material-ui/core";

type FilmItemProps = {
    film: Film
};

class FilmItem extends React.Component<FilmItemProps> {
    render() {
        return (
          <Card>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {this.props.film.title}
                  </Typography>
                  <Typography color="textSecondary">
                      {this.props.film.director}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">{this.props.film.opening_crawl}</Typography>
              </CardContent>
              <CardActions>
                  <Button variant="outlined" size="small" color="primary" href={"/peoples?films="+this.props.film.url}>Peoples</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/planets?films="+this.props.film.url}>Planets</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/species?films="+this.props.film.url}>Species</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/starships?films="+this.props.film.url}>Starships</Button>
                  <Button variant="outlined" size="small" color="primary" href={"/vehicles?films="+this.props.film.url}>Vehicles</Button>
              </CardActions>
          </Card>
        );
    }
}

export default FilmItem;