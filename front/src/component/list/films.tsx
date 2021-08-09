import React from "react";
import Film from "../../type/film";
import {Grid} from "@material-ui/core";
import FilmItem from "./item/film";
import {GridColDef} from '@material-ui/data-grid';

type FilmsListProps = {
    films: Film[]
};

const ROWS: GridColDef[] = [
    {
        field: 'title',
        headerName: 'title',
        sortable: false,
    },
    {
        field: 'producer',
        headerName: 'producer',
        sortable: false,
    },
    {
        field: 'producer',
        headerName: 'producer',
        sortable: false,
    },
    {
        field: 'species',
        headerName: 'Species',
        sortable: false,
    },
    {
        field: 'species',
        headerName: 'Species',
        sortable: false,
    },
    {
        field: 'starships',
        headerName: 'Starships',
        sortable: false,
    },
    {
        field: 'characters',
        headerName: 'Characters',
        sortable: false,
    },
    {
        field: 'release_date',
        headerName: 'Release Date',
        sortable: true,
    },
    {
        field: 'created',
        headerName: 'Date of creation',
        sortable: true,
    },
    {
        field: 'edited',
        headerName: 'Date of update',
        sortable: true,
    },

];
class FilmsList extends React.Component<FilmsListProps> {
    render() {
       return (
           <Grid
               container
               direction="row"
               justifyContent="flex-start"
               alignItems="stretch"
               spacing={3}
           >
               {this.props.films.map((film,key) => (
                   <Grid sm={4} item key={key}>
                       <FilmItem film={film}/>
                   </Grid>
               ))}
           </Grid>
       )
    }
}

export default FilmsList;