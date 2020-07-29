import React,{useState} from "react";
import BlogCard from "./blogcard";
import { makeStyles } from '@material-ui/core/styles';
import {Route, useRouteMatch, Switch, Redirect} from "react-router-dom";
import PostPreview from "./postpreview";
import AboutMe from "./aboutme";
import CreatePost from "./createpost";

const useStyles = makeStyles({
    root: {

    }
})
function BlogContainer(props) {
    const [postId, setPostId]=useState(null);
    const handleReadMore = (id)=> {
        setPostId(id);
    }
    const handleMenuAction = (e, action)=> {
        console.log("Handle menu actions" + action);
        console.log("Event of menu actions" + e);
    }
    const GenerateCard = ({history})=> {
        const handleMenuAction = (e, action)=> {
            history.push('/blogs/preview/1')
            console.log("Handle menu actions" + action);
            console.log("Event of menu actions" + e);
        }
        return <div>{props.posts.map((data,key)=><BlogCard key={key} user={props.user} post={data} handleMenuAction={handleMenuAction} handleReadMore={handleReadMore}/>)}</div>;
    }
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={`${match.path}/about`}>
                    <AboutMe user={props.user}/>
                </Route>
                <Route path={`${match.path}/create`} render={(prop)=>
                    <CreatePost {...prop} user={props.user} handleCreatePost={props.handleCreatePost}/> } />
                <Route path={`${match.path}/edit/:postId`} render={(prop)=>
                    <CreatePost {...prop} edit="true" user={props.user} posts={props.posts} handleEditPost={props.handleEditPost}/> } />
                <Route path={`${match.path}/preview/:postId`}>
                    <PostPreview user={props.user} posts={props.posts}/>
                </Route>
                <Route path="/blogs" render={(prop)=>
                    (props.posts.map((data,key)=><BlogCard {...prop} key={key} user={props.user} post={data} handleMenuAction={handleMenuAction} handleDeletePost={props.handleDeletePost} handleReadMore={handleReadMore}/>))
                }/>
            </Switch>
        </div>
    )
}
export default BlogContainer;