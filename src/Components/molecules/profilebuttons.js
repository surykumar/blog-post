import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useRouteMatch, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:"10%",
        marginBottom:"5%",
        padding: "0 20%",
    },
    right: {
        paddingRight: "0.5rem",
    },
    main: {
       color: "white",
        marginTop: "0.5rem"
    },
    bgcolor: {
        backgroundColor: "#e0e0e059"
    },
    linkbutton: {
        textDecoration: "none",
        color:"white"
    }

}));
function ProfileButtons() {
    const classes = useStyles();
    let match = useRouteMatch();
    return (
        <div className={classes.root}>
            <Link className={classes.linkbutton} to={`${match.url}`}><Button className={classes.main}><HomeIcon className={classes.right}/> <span>Posts</span></Button></Link>
            <Link className={classes.linkbutton} to={`${match.url}/create`}><Button className={classes.main}><AddCircleIcon className={classes.right}/>  <span>Create</span></Button></Link>
            <Link className={classes.linkbutton} to={`${match.url}/about`}><Button className={classes.main}><PersonIcon className={classes.right}/>  <span>About</span></Button></Link>
            <Button variant="contained" className={`${classes.main} ${classes.bgcolor}`}>Get in touch</Button>
        </div>
    )
}
export default ProfileButtons;