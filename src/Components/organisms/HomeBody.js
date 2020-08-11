import React from "react";
import BlogCard from "./BlogCard";
import {Route, useRouteMatch, Switch} from "react-router-dom";
import PostPreview from "./PostPreview";
import CreatePost from "./CreatePost";
import PostContainer from "./PostContainer";
import {Grid} from "@material-ui/core";
import SubscribeBlog from "./SubscribeBlog";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MiniPostCardContainer from "./MiniPostCardContainer";
const useStyles = makeStyles({
    subscribe: {
        padding: '2rem 0',
        background: '#fafafa'
    },
    body: {
        display:"flex",
        padding:"2% 12%"
    },
    padLeft: {
        paddingLeft:"1rem",
        marginLeft:"1rem",
        borderLeft: "5px solid #54B689"
    }
})
function HomeBody(props) {
    const classes = useStyles();
    return (
        <Grid>
            <Switch>
                <Route path="/preview/:postId">
                    <PostPreview posts={props.posts}/>
                </Route>
                <Route path="/" render={(prop)=>
                    <Grid>
                        <Grid className={classes.subscribe}>
                            <SubscribeBlog/>
                            {/*<img src="https://expresswriters.com/wp-content/uploads/2017/06/header-1210x423.jpg"/>*/}
                        </Grid>
                        <Grid className={classes.body}>
                            <Grid style={{width:"65%"}} >
                                <Typography variant="subtitle2" color="secondary" className={classes.padLeft}>
                                    Recent posts
                                </Typography>
                                <PostContainer prop={prop} posts={props.posts} />
                            </Grid>
                            <Grid style={{width:"30%", marginLeft:"5%"}}>
                                <Typography variant="subtitle2" color="secondary" className={classes.padLeft}>
                                    Popular posts
                                </Typography>
                                <MiniPostCardContainer prop={prop} posts={props.posts.slice(0,4)} />
                            </Grid>
                        </Grid>
                    </Grid>
                }/>
            </Switch>
        </Grid>
    )
}
export default HomeBody;