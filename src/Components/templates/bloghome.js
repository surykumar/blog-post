import React from "react";
import LeftNav from "../organisms/leftnav";
import Header from "../organisms/header";
import BlogContainer from "../organisms/blogcontainer";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    header: {
        left:'260px',
    },
     body: {
         left:'260px',
         top: '65px',
         position:"absolute",
         width:'85%',
     }
})
function BlogHome(props) {
    const classes = useStyles();
    return (
        <div>
            <LeftNav user={ props.user }/>
            <div className={classes.root}>
                <div className={classes.header}>
                    <Header/>
                </div>
                <div className={classes.body}>
                    <BlogContainer user={props.user} posts={props.posts} handleCreatePost={props.handleCreatePost} handleEditPost={props.handleEditPost} handleDeletePost={props.handleDeletePost}/>
                </div>
            </div>
        </div>
    )
}
export default BlogHome;