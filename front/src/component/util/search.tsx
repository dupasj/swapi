import React from "react";
import {FormControl, Grid, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {SearchRounded} from "@material-ui/icons";
import styles from "../../style/search.module.css";

type SearchType = {
    value: null|string
}

class Search extends React.Component<any, SearchType>{
    constructor(props: any,context: any) {
        super(props,context);

        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.search = this.search.bind(this);

        if (typeof window.location.search !== "string"){
            this.state = {
                value: null
            }
            console.log("not search");
            return this;
        }

        const params = new URLSearchParams(window.location.search);
        this.state = {
            value: params.get("query")
        }
        return this;
    }

    handleKeyPress(event: React.KeyboardEvent){
        if (event.keyCode === 13){
            this.search();
        }
    }
    handleValueChange(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            value: event.target.value
        });
    }
    search(){
        if (typeof this.state.value !== "string"){
            return;
        }

        const url = new URL(window.location.href);
        url.searchParams.set("query",this.state.value);

        // @ts-ignore
        window.location = url.toString();
    }

    render(){
        return (
            <div
                className={styles["search-container"]}
            >
                <div className={styles["search-form-container"]}>
                    <Grid
                        container
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <Grid item sm={4}>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="input-search">Looking for ?</InputLabel>
                                <Input
                                    id={"input-search"}
                                    value={this.state.value}
                                    onKeyDown={this.handleKeyPress}
                                    onChange={this.handleValueChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={this.search}
                                            >
                                                <SearchRounded/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles["search-body-container"]}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Search;