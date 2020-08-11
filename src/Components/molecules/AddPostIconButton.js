import React from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { Link, useRouteMatch } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
function AddPostIconButton(props) {
    const classes = useStyles();
    let match = useRouteMatch();
    return (
        <Link className={classes.textDecorationNone} to={`${match.url}/${props.user.uuid}/create`}>
            <Button className={classes.main}><AddCircleIcon className={classes.right}/><span>{props.name}</span></Button>
        </Link>
    )
}
export default AddPostIconButton;