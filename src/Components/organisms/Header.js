import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme)=>({
    root: {
        left:"260px",
        width:"calc(100% - 260px)",
        backgroundColor: theme.palette.header.main,
        color: theme.palette.neutral.main,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    indicator: {
        color:"white",
        backgroundColor:"white"
    }
}))
function Header(props) {
    const { isAuthenticated } = useAuth0();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const handleTabChange = (e)=> {
        e.preventDefault();
    }
    const classes = useStyle();
    return (
            <AppBar  position="fixed" className={classes.root}>
                <Toolbar>
                    <Tabs style={{position: "absolute"}} indicatorColor="neutral" value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Home" component={Link} to="/" disableRipple {...a11yProps(0)} />
                        {isAuthenticated &&
                            <Tab label="Blog" component={Link} to={`/blogs/${props.user.uuid}`} disableRipple />
                        }
                    </Tabs>
                    <div style={{width:"100%"}}>
                        {isAuthenticated ?
                            <Button style={{float:"right"}} color="inherit" onClick={()=>props.logout()}>Logout</Button>
                            :
                            <Button style={{float:"right"}} color="inherit" onClick={()=>props.loginWithRedirect()}>Login</Button>

                        }
                        {/*    <UserManagementCard isAuthenticated={props.isAuthenticated} logout={props.logout} loginWithRedirect={props.loginWithRedirect}/>*/}
                    </div>
                </Toolbar>
            </AppBar>
    )
}
export default Header;