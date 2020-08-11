import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme)=>({
    root: {
        textAlign:"center"
    },
    defaultMargin:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))
function BlogBodyHeader(props){
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography className={classes.defaultMargin} variant="subtitle2" color="primary">
                A Blog About All And Life
            </Typography>
            <Typography className={classes.defaultMargin} variant="h4" color="secondary">
                Welcome to Home Blog. Start creating new post!
            </Typography>
        </Grid>
    )
}

export default BlogBodyHeader;