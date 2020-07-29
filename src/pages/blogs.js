import React from "react";
import BlogHome from "../Components/templates/bloghome";
function Blogs(props) {
    console.log("props is ", props);
    return (
        <div>
            <BlogHome user={props.user} posts={props.posts} handleCreatePost={props.handleCreatePost} handleEditPost={props.handleEditPost} handleDeletePost={props.handleDeletePost}/>
        </div>
    )
}
export default Blogs;