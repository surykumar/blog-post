import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from "@material-ui/core";
import ProfileAvatar from "../atoms/ProfileAvatar";
import Info from "../molecules/Info";
import ConnectButtons from "../molecules/ConnectButtons";
import BlogActionButtons from "../molecules/BlogActionButtons";
import HomeLeftNavPostRating from "./HomeLeftNavPostRating";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme)=>({
        root: {
            width:'260px',
            height: '100vh',
            position: 'fixed',
            top: "0px",
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


function HomeLeftNav(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="h3" style={{padding:"6% 0 3% 0"}}>
                React Blog
            </Typography>
            <hr style={{width:"90%"}}/>
            {/*<HomeLeftNavPostCategory/>*/}
            {/*<hr style={{width:"90%"}}/>*/}
            {/*<HomeLeftNavPostRating/>*/}
            {/*<h2 className={classes.title}>*/}
            {/*    {props.user.given_name}'s Blog*/}
            {/*</h2>*/}
            {/*<div className={classes.avatar}>*/}
            {/*    <ProfileAvatar picture={props.user.picture} name={props.user.name} />*/}
            {/*</div>*/}
            {/*<div className={classes.info}>*/}
            {/*    <Info info={props.user.info}/>*/}
            {/*</div>*/}
            {/*<ConnectButtons/>*/}
            {/*<hr style={{width:"90%"}}/>*/}
            {/*<BlogActionButtons/>*/}
        </Box>
    )
}
export default HomeLeftNav;