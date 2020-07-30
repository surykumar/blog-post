import React from "react";
import BlogCard from "./blogcard";
import {Route, useRouteMatch, Switch} from "react-router-dom";
import PostPreview from "./postpreview";
import AboutMe from "./aboutme";
import CreatePost from "./createpost";

function BlogContainer(props) {
    const match = useRouteMatch();
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
                    (props.posts.map((data,key)=><BlogCard {...prop} key={key} user={props.user} post={data} handleDeletePost={props.handleDeletePost}/>))
                }/>
            </Switch>
        </div>
    )
}
export default BlogContainer;