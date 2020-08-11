import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    icon: {
        padding: theme.spacing(2),
        color: theme.palette.neutral.main
    },
    averageFontSize: {
        fontSize: theme.typography.iconButton.fontSize,
    }
}));

function TwitterIconButton(props) {
    const classes = useStyles();
    return(
        <IconButton aria-label="Twitter" className={classes.icon}>
            <TwitterIcon className={classes.averageFontSize}/>
        </IconButton>
    )
}
export default TwitterIconButton;