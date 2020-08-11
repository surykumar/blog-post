import React from "react";
import Header from "../organisms/Header";
import Blogbody from "../organisms/BlogBody";
import { makeStyles } from '@material-ui/core/styles';
import BlogLeftNav from "../organisms/BlogLeftNav";
import {Grid} from "@material-ui/core";
import HomeLeftNav from "../organisms/HomeLeftNav";
import HomeBody from "../organisms/HomeBody";
const useStyles = makeStyles({
    body: {
        left:'260px',
        top: '65px',
        position:"absolute",
        width:'calc(100% - 260px)',
    }
})
function HomeContainerTemplate(props) {
    const classes = useStyles();
    return (
        <Grid>
            <HomeLeftNav/>
            {/*<Grid className={classes.body}>*/}
            {/*    <HomeBody posts={props.posts} />*/}
            {/*</Grid>*/}
        </Grid>
    )
}
export default HomeContainerTemplate;