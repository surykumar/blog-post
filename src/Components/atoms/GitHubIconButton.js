import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    icon: {
        padding: theme.spacing(2),
        color: theme.palette.neutral.main
    },
    averageFontSize: {
        fontSize: theme.typography.iconButton.fontSize,
    }
}));

function GitHubIconButton(props) {
    const classes = useStyles();
    return(
            <IconButton aria-label="Github" className={classes.icon}>
                <GitHubIcon className={classes.averageFontSize}/>
            </IconButton>
    )
}
export default GitHubIconButton;