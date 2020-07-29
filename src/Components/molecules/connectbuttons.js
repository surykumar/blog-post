import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:"10%",
        marginBottom:"5%"
    },
    icon: {
        padding: "0.5rem",
        fontSize: 30,
        color: 'white'
    }
}));

function ConnectButtons(props) {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <IconButton aria-label="Github" className={classes.icon}>
                <GitHubIcon/>
            </IconButton>
            <IconButton aria-label="LinkedIn" className={classes.icon}>
                <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Twitter" className={classes.icon}>
                <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" className={classes.icon}>
                <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Facebook" className={classes.icon}>
                <FacebookIcon />
            </IconButton>
        </div>
    )
}
export default ConnectButtons;