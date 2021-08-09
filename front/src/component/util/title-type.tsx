import React from "react";
import {Divider, Typography} from "@material-ui/core";

type TitleTypeProps = {
    title: string
}

class TitleType extends React.Component<TitleTypeProps>{
    render() {
        return (
            <div style={{paddingTop: "50px",paddingBottom: "20px"}}>
                <Typography variant={"h2"} component="h2">{this.props.title}</Typography>
                <Divider style={{marginTop: "7px"}}/>
            </div>
        )
    }
}

export default TitleType;