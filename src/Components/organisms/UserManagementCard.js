import React from "react";
import Button from "@material-ui/core/Button";
import {Grid, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link, useRouteMatch} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import {makeStyles} from "@material-ui/core/styles";
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);
const useStyles = makeStyles((theme) => ({
    root: {
        left: "calc(100% - 15rem)",
        width: "11rem"
    },
    paper: {
        border: '1px solid #d3d4d5',
    },
    linkButton: {
        textDecoration: "none",
        color:"grey"
    }

}));
function UserManagementCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        props.logout();
    }
    let match = useRouteMatch();
    const classes = useStyles();
    return (
        <Grid style={{float:"right"}}>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                className={classes.paper}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                keepMounted
                onClose={handleClose}
            >
                <Typography style={{padding: "0.5rem 1rem"}}>Suryakant Kumar</Typography>
                <hr/>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.linkButton} to="/blogs/profile"><AccountBoxIcon/>Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}><ExitToAppIcon/>Logout</MenuItem>
            </Menu>
        </Grid>

    )
}
export default UserManagementCard;