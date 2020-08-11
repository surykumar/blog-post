import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(1),
        color: theme.palette.neutral.main
    }
}));

function SubscribeForm(props) {
    const classes = useStyles();
    return (
        <form>
                <TextField
                    variant="outlined"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                    autoComplete="email"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}>
                    Subscribe
                </Button>
        </form>
    )
}
export default SubscribeForm;