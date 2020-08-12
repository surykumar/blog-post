import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from "@material-ui/core";
import ProfileAvatar from "../atoms/ProfileAvatar";
import Info from "../molecules/Info";
import ConnectButtons from "../molecules/ConnectButtons";
import BlogActionButtons from "../molecules/BlogActionButtons";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme)=>({
    root: {
        width:'260px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        textAlign: 'center !important',
        lineHeight: 1.5
    },
    title: {
        flexGrow: 1,
        textTransform: 'capitalize',
        padding:"6% 0 3% 0"
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


function BlogLeftNav(props) {
    const classes = useStyles();
    const user = useSelector(state=> state.user);
    return (
        <Box className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                {user.given_name}
            </Typography>
            <div className={classes.avatar}>
                <ProfileAvatar picture={user.picture} name={`${user.given_name} ${user.family_name}`} />
            </div>
            <div className={classes.info}>
                <Info bio={user.bio}/>
            </div>
            <ConnectButtons/>
            <hr style={{width:"90%"}}/>
            <BlogActionButtons user={user}/>
        </Box>
    )
}
export default BlogLeftNav;