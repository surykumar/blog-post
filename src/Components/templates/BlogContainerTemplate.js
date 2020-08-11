import React from "react";
import Header from "../organisms/Header";
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
            <BlogLeftNav user={ props.user }/>
            <div className={classes.body}>
                <BlogBody user={props.user} posts={props.posts}
                          handleCreatePost={props.handleCreatePost}
                          handleEditPost={props.handleEditPost}
                          handleDeletePost={props.handleDeletePost}
                          handleUpdateProfile={props.handleUpdateProfile}
                />
            </div>
        </Grid>
    )
}
export default BlogContainerTemplate;