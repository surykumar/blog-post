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
import {useSelector} from "react-redux";
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
    const posts = useSelector(state=> state.posts);
    return (
        <Grid>
            <Switch>
                <Route path={`${match.path}/:userId/create`} render={(prop)=>
                    <CreatePost {...prop} /> } />
                <Route path={`${match.path}/:userId/edit/:postId`} render={(prop)=>
                    <CreatePost {...prop} edit="true" /> } />
                <Route path={`${match.path}/:userId/preview/:postId`}>
                    <PostPreview />
                </Route>
                <Route path={`${match.path}/:userId/profile`} render={(prop)=>
                    <BlogProfile {...prop} />} />
                <Route path={`/blogs/:userId`} render={(prop)=>
                    <Grid>
                        <Grid className={classes.subscribe}>
                            <BlogBodyHeader/>
                        </Grid>
                            <Grid style={{margin:"0 12%"}}>
                                {posts.length ?
                                    <PostContainer prop={prop} authorized/>
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