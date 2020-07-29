import React from "react";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function ProfileAvatar(props) {
    const classes = useStyles();
    return (
            <Avatar alt="Remy Sharp" src={props.avatar} className={classes.large} />
    )
}
export default ProfileAvatar;