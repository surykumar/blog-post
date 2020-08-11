import React from "react";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


function Info(props) {
    return (
        <Grid>
            <Typography variant="body1">{props.bio}</Typography>
            <br/>
        </Grid>
    )
}
export default Info;