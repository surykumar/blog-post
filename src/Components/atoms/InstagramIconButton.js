import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    icon: {
        padding: theme.spacing(2),
        color: theme.palette.neutral.main
    },
    averageFontSize: {
        fontSize: theme.typography.iconButton.fontSize,
    }
}));

function InstagramIconButton(props) {
    const classes = useStyles();
    return(
        <IconButton aria-label="Instagram" className={classes.icon}>
            <InstagramIcon className={classes.averageFontSize}/>
        </IconButton>
    )
}
export default InstagramIconButton;