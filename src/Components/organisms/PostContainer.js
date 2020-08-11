import React from "react";
import BlogCard from "./BlogCard";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
const useStyles = makeStyles({
    posts: {
        display:"flex",
        flexWrap:"wrap",
        // margin:"2% 12%"
    }
})
function PostContainer(props) {
    let { userId } = useParams();
    const prop = props.prop;
    const posts = props.posts;
    const classes = useStyles();
    const handlePreviewPost = (id)=>{
        // const url = props.authorized ? `/blogs/${props.user.uuid}/preview/${id}` : `/preview/${id}`;
        const url = props.authorized ? `/blogs/${userId}/preview/${id}` : `/preview/${id}`;
        prop.history.push(url);
    }
    const handleEditPost = (id)=>{
        prop.history.push(`/blogs/${userId}/edit/${id}`);
    }
    return (
                <Grid className={classes.posts}>
                    {posts.map((data,key)=>
                        <BlogCard {...prop} key={key} post={data} user={data.user} handleEditPost={handleEditPost} handlePreviewPost={handlePreviewPost} handleDeletePost={props.handleDeletePost} authorized={props.authorized}/>)
                    }
                </Grid>
        )
}
export default PostContainer;