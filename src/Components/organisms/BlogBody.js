import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Route, useRouteMatch, Switch} from "react-router-dom";
import PostPreview from "./PostPreview";
import CreatePost from "./CreatePost";
import PostContainer from "./PostContainer";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import BlogBodyHeader from "../molecules/BlogBodyHeader";
import BlogProfile from "./BlogProfile";
const useStyles = makeStyles({
    subscribe: {
        padding: '2rem 0',
        background: '#fafafa'
    },
    padLeft: {
        margin:"2rem",
        paddingLeft: "1rem",
        borderLeft: "5px solid #54B689"
    }
})
function BlogBody(props) {
    const match = useRouteMatch();
    const classes = useStyles();
    return (
        <Grid>
            <Switch>
                <Route path={`${match.path}/:userId/create`} render={(prop)=>
                    <CreatePost {...prop} user={props.user} user={props.user} handleCreatePost={props.handleCreatePost}/> } />
                <Route path={`${match.path}/:userId/edit/:postId`} render={(prop)=>
                    <CreatePost {...prop} user={props.user} edit="true" user={props.user} posts={props.posts} handleEditPost={props.handleEditPost}/> } />
                <Route path={`${match.path}/:userId/preview/:postId`}>
                    <PostPreview user={props.user} posts={props.posts}/>
                </Route>
                <Route path={`${match.path}/:userId/profile`} render={(prop)=>
                    <BlogProfile {...prop} user={props.user} handleUpdateProfile={props.handleUpdateProfile}/>} />
                <Route path={`/blogs/:userId`} render={(prop)=>
                    <Grid>
                        <Grid className={classes.subscribe}>
                            <BlogBodyHeader/>
                        </Grid>
                            <Grid style={{margin:"0 12%"}}>
                                {props.posts.length ?
                                    <PostContainer user={props.user} prop={prop} posts={props.posts} handleDeletePost={props.handleDeletePost} authorized/>
                                    :
                                    <Typography variant="subtitle2" color="secondary" className={classes.padLeft}>
                                        No Post found! Start creating one.
                                    </Typography>
                                }
                            </Grid>
                    </Grid>
                }/>
            </Switch>
        </Grid>
    )
}
export default BlogBody;