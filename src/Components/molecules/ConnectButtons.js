import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIconButton from "../atoms/GitHubIconButton";
import LinkedInIconButton from "../atoms/LinkedInIconButton";
import TwitterIconButton from "../atoms/TwitterIconButton";
import InstagramIconButton from "../atoms/InstagramIconButton";
import FaceBookIconButton from "../atoms/FaceBookIconButton";
import {useSelector} from "react-redux";
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1)
    }
}));

function ConnectButtons(props) {
    const classes = useStyles();
    const user = useSelector(state=> state.user);
    return(
        <div className={classes.root}>
            <a href={user.github} target="_blank">
                <GitHubIconButton/>
            </a>
            <a href={user.linkedin} target="_blank">
                <LinkedInIconButton/>
            </a>
            <a href={user.twitter} target="_blank">
                <TwitterIconButton/>
            </a>
            <a href={user.instagram} target="_blank">
                <InstagramIconButton/>
            </a>
            <a href={user.facebook} target="_blank">
                <FaceBookIconButton/>
            </a>
        </div>
    )
}
export default ConnectButtons;