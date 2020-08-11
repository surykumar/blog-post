import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { Link, useRouteMatch } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
    right: {
        paddingRight: theme.spacing(2)
    },
    main: {
        color: theme.palette.neutral.main,
        marginTop: theme.spacing(2)
    },
    textDecorationNone: {
        textDecoration: "none",
    }

}));
function ProfileIconButton(props) {
    const classes = useStyles();
    let match = useRouteMatch();
    return (
        <Link className={classes.textDecorationNone} to={`${match.url}/${props.user.uuid}/profile`}>
            <Button className={classes.main}><PersonIcon className={classes.right}/>  <span>{props.name}</span></Button>
        </Link>
    )
}
export default ProfileIconButton;