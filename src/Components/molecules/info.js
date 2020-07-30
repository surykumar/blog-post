import React from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    linkButton: {
        color:"white"
    }
}));

function Info(props) {
    const classes = useStyles();
    let match = useRouteMatch();
    return (
        <div>
            <span>{props.info.length > 100? `${props.info.slice(0,100)} ...`:props.info}</span>
            <br/>
            <Link className={classes.linkButton} to={`${match.url}/about`}>Find out more about me</Link>
        </div>
    )
}
export default Info;