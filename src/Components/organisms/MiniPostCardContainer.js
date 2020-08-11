import React from "react";
import {Grid} from "@material-ui/core";
import MiniPostCard from "./MiniPostCard";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        margin: '6% 3%',
    }
})
function MiniPostCardContainer(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            {props.posts.map(data=> <MiniPostCard post={data}/>)}
        </Grid>
    )
}
export default MiniPostCardContainer;