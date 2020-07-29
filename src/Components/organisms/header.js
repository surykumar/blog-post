import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyle = makeStyles((theme)=>({
    root: {
        left:"260px",
        backgroundColor: theme.palette.primary.main,
        // background: '#5D6BA7',
        color: '#fff',
        width:'inherit'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}))
function Header(props) {

    const classes = useStyle();
    return (
            <AppBar className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {/*News*/}
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
    )
}
export default Header;