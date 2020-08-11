import React from "react";
import BlogContainerTemplate from "../Components/templates/BlogContainerTemplate";
function Blogs(props) {
    return (
        <div>
            <BlogContainerTemplate user={props.user} posts={props.posts}
                                   handleCreatePost={props.handleCreatePost}
                                   handleEditPost={props.handleEditPost}
                                   handleDeletePost={props.handleDeletePost}
                                   handleUpdateProfile={props.handleUpdateProfile}
            />
        </div>
    )
}
export default Blogs;