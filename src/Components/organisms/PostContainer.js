import React from "react";
import BlogCard from "./BlogCard";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
const useStyles = makeStyles({
    posts: {
        display:"flex",
        flexWrap:"wrap",
    }
})
function PostContainer(props) {
    let { userId } = useParams();
    const prop = props.prop;
    const posts = useSelector(state=> state.posts);
    const classes = useStyles();
    const handlePreviewPost = (id)=>{
        const url = props.authorized ? `/blogs/${userId}/preview/${id}` : `/preview/${id}`;
        prop.history.push(url);
    }
    const handleEditPost = (id)=>{
        prop.history.push(`/blogs/${userId}/edit/${id}`);
    }
    return (
                <Grid className={classes.posts}>
                    {posts.map((data,key)=>
                        <BlogCard {...prop} key={key} post={data} user={data.user} handleEditPost={handleEditPost} handlePreviewPost={handlePreviewPost} authorized={props.authorized}/>)
                    }
                </Grid>
        )
}
export default PostContainer;