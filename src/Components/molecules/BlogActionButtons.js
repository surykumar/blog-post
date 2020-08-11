import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import PostIconButton from "./PostIconButton";
import AddPostIconButton from "./AddPostIconButton";
import ProfileIconButton from "./ProfileIconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column"
    },

}));
function BlogActionButtons(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <PostIconButton user={props.user} name="Posts"/>
            <AddPostIconButton user={props.user} name="Create"/>
            <ProfileIconButton user={props.user} name="Profile"/>
        </div>
    )
}
export default BlogActionButtons;