import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GitHubIconButton from "../atoms/GitHubIconButton";
import LinkedInIconButton from "../atoms/LinkedInIconButton";
import TwitterIconButton from "../atoms/TwitterIconButton";
import InstagramIconButton from "../atoms/InstagramIconButton";
import FaceBookIconButton from "../atoms/FaceBookIconButton";
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1)
    }
}));

function ConnectButtons(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <GitHubIconButton/>
            <LinkedInIconButton/>
            <TwitterIconButton/>
            <InstagramIconButton/>
            <FaceBookIconButton/>
        </div>
    )
}
export default ConnectButtons;