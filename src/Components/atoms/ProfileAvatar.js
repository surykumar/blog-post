import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),
    },
}));

function ProfileAvatar(props) {
    const classes = useStyles();
    return (
            <Avatar alt={props.name} src={props.picture} className={classes.large} />
    )
}
export default ProfileAvatar;