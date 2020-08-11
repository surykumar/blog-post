import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
    icon: {
        padding: theme.spacing(2),
        color: theme.palette.neutral.main
    },
    averageFontSize: {
        fontSize: theme.typography.iconButton.fontSize,
    }
}));

function FaceBookIconButton(props) {
    const classes = useStyles();
    return(
        <IconButton aria-label="Facebook" className={classes.icon}>
            <FacebookIcon className={classes.averageFontSize}/>
        </IconButton>
    )
}
export default FaceBookIconButton;