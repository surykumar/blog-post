import React from "react";
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        "&:hover": {
            opacity: "0.75",
        }
    },
    uploadImgIcon: {
        position: "absolute",
        bottom: 0,
        right: "3rem",
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.secondary.main,
        "&:hover":{
            backgroundColor: theme.palette.neutral.main,
            color: theme.palette.primary.main,
        }
    }
}));

function ProfileImageUpload(props) {
    const classes = useStyles();
    return (
        <Grid style={{width:"15rem", position:"relative"}}>
            <Avatar alt={`${props.user.given_name} ${props.user.family_name}`} src={props.profileUrl} className={classes.avatar}/>
            <label htmlFor="upload_profile">
                <IconButton aria-label="Upload BlogProfile image" component="span" className={classes.uploadImgIcon}>
                    <CameraAltIcon />
                </IconButton>
            </label>
            <input
                style={{ display: 'none' }}
                accept="image/*"
                className={classes.input}
                id="upload_profile"
                aria-label="Upload profile"
                type="file"
                onChange={props.handleImageChange}
                onClick={event => {
                    event.target.value = null;
                }}
            />
        </Grid>
    )
}

export default ProfileImageUpload;