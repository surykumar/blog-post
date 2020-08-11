import React from "react";
import {Grid} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {grey, red} from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link, useRouteMatch} from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: "3%",
            width: 324,
            height:100,
            border: "1px solid lightgrey",
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        avatar: {
            backgroundColor: grey[500],
        },
        header: {
            padding:8,
        },
        link: {
            textDecoration:"none",
            color:theme.palette.secondary.main,
            "&:hover":{
                textDecoration:"underline",
                color: theme.palette.primary.main,
                fontWeight: "bold"
            }
        },
        iconStyle: {
            marginRight: "10px",
            color: theme.palette.secondary.main
        },
        media: {
            // paddingTop: theme.spacing(1),
            height: 100,
            width: 120,
        },
        footer: {
            fontSize: "0.75rem",
            color: "grey",
            // paddingBottom:"0.5rem"
        }
    })
)
const IMAGE_NOT_AVAILABLE = "https://bostonparkingspaces.com/wp-content/themes/classiera/images/nothumb/nothumb370x300.png"
function MiniPostCard(props){
    const classes = useStyles();
    let match = useRouteMatch();

    const getCurrentDate = (data)=> {
        const d = new Date(data);
        return d.toDateString().split(' ').slice(1).join(' ');
    }
    return (
        <Card className={classes.root}>
            <Grid style={{width:"120px"}}>
                <CardMedia
                    className={classes.media}
                    image={props.post.image ? props.post.image :IMAGE_NOT_AVAILABLE}
                    title={props.post.title}
                />
            </Grid>
           <Grid style={{position:"relative"}}>
                <CardContent className={classes.header}>
                    <Link className={classes.link} to={props.authorized ?`${match.url}/preview/${props.post.id}`:`/preview/${props.post.id}`}>
                        <Typography variant="h5" color="primary">
                            {props.post.title}
                        </Typography>
                    </Link>
                </CardContent>
               <Grid className={classes.header} style={{position:"absolute", bottom:"0px"}}>
                   <Typography className={classes.footer}>
                       <PersonIcon fontSize="inherit" color="primary"/><span style={{paddingLeft:"3px"}}>{`${props.post.user.given_name} ${props.post.user.family_name}`}</span>
                   </Typography>
                   <Typography className={classes.footer}>
                       <CalendarTodayIcon fontSize="inherit" color="primary"/> <span style={{paddingLeft:"3px"}}>{getCurrentDate(props.post.createdAt)}</span>
                       <FavoriteIcon style={{paddingLeft:"2.5rem"}} fontSize="inherit" color="primary"/> <span style={{paddingLeft:"3px"}}>4999</span>
                   </Typography>
               </Grid>
            </Grid>
        </Card>
    )
}
export default MiniPostCard;