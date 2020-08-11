import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SubscribeForm from "../molecules/SubscribeForm";

const useStyles = makeStyles((theme)=>({
    root: {
        textAlign:"center"
    },
    defaultMargin:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}))
function SubscribeBlog(props){
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Typography className={classes.defaultMargin} variant="h4" color="primary">
                A Blog About Software Development And Life
            </Typography>
            <Typography className={classes.defaultMargin} variant="body2" color="secondary">
                 Welcome to my blog. Subscribe and get my latest blog post in your inbox.
            </Typography>
            <Grid className={classes.defaultMargin}>
                <SubscribeForm/>
            </Grid>
        </Grid>
    )
}

export default SubscribeBlog;