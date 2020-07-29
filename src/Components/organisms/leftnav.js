import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from "@material-ui/core";
import ProfileAvatar from "../atoms/profileavatar";
import Info from "../molecules/info";
import ConnectButtons from "../molecules/connectbuttons";
import ProfileButtons from "../molecules/profilebuttons";

const useStyles = makeStyles((theme)=>({
    root: {
        width:'260px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        textAlign: 'center !important',
        lineHeight: 1.5
    },
    title: {
        flexGrow: 1,
        textAlign:'center'
    },
    avatar: {
        padding:"0 20%"
    },
    info : {
        marginTop: "5%",
        fontSize: "0.875rem"
    }
    })
)


function LeftNav(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h2 className={classes.title}>
                {props.user.firstName}'s Blog
            </h2>
            <div className={classes.avatar}>
                <ProfileAvatar avatar={props.user.avatar}/>
            </div>
            <div className={classes.info}>
                <Info/>
            </div>
            <ConnectButtons/>
            <hr style={{width:"90%"}}/>
            <ProfileButtons/>
        </Box>
    )
}
export default LeftNav;