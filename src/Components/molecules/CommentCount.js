import React, { Component } from "react"
import Disqus from "disqus-react"


function CommentCount(props){
    const disqusShortname = "react-blog-3"
    const disqusConfig = {
        url: `http://localhost:3000/blogs/${props.post.user.uuid}/preview/${props.post.id}`,
        identifier: `post-comments-${props.post.id}`,
        title: `Title - ${props.post.id}`
    }
    return (
        <div className="article-container">
            <Disqus.CommentCount
                shortname={disqusShortname}
                config={disqusConfig}>
            </Disqus.CommentCount>
        </div>
    )
}
export default CommentCount;