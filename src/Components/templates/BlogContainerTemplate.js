import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BlogLeftNav from "../organisms/BlogLeftNav";
import {Grid} from "@material-ui/core";
import BlogBody from "../organisms/BlogBody";
const useStyles = makeStyles({
     body: {
         left:'260px',
         top: '65px',
         position:"absolute",
         width:'calc(100% - 260px)',
     }
})
function BlogContainerTemplate(props) {
    const classes = useStyles();
    return (
        <Grid>
            <BlogLeftNav/>
            <div className={classes.body}>
                <BlogBody />
            </div>
        </Grid>
    )
}
export default BlogContainerTemplate;