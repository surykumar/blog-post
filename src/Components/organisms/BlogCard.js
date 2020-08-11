import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { grey } from '@material-ui/core/colors';
import {Link, useRouteMatch} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {Grid} from "@material-ui/core";
import {Router} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
        root: {
            // display: 'flex',
            margin: "3%",
            // width:'50%',
            width: 324,
            height:400,
            border: "1px solid lightgrey"
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            width: 700
        },
        avatar: {
            backgroundColor: grey[500],
        },
        header: {
            padding:8,
            color: theme.palette.secondary.main,
            textTransform: "capitalize",
            display: "flex",
            marginTop: "0.5rem"
        },
        link: {
            textDecoration:"none",
            color:theme.palette.primary.main
        },
        iconStyle: {
            marginRight: "10px",
            color: theme.palette.secondary.main
        },
        media: {
            paddingTop: theme.spacing(1),
            height: "200px"
        },
        footer: {
            fontSize: "0.75rem",
            color: "grey",
            paddingLeft: "6.75rem"
            // paddingBottom:"0.5rem"
        }
    })
)
const IMAGE_NOT_AVAILABLE = "https://bostonparkingspaces.com/wp-content/themes/classiera/images/nothumb/nothumb370x300.png"
function BlogCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const post = props.post;
    const user = props.user;
    let match = useRouteMatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const getCurrentDate = (timestamp)=> {
        if(!timestamp) return "";
        const d = new Date(timestamp);
        return d.toDateString().split(' ').slice(1).join(' ');
    }
    const options = [
        {
            name: "Share",
            icon: <ShareIcon className={classes.iconStyle}/>
        },
        {
            name: "Preview",
            icon: <VisibilityIcon className={classes.iconStyle}/>
        }
    ];
    if(props.authorized){
        options.push({
                name: "Edit",
                icon: <EditIcon className={classes.iconStyle}/>
            },
            {
                name:"Delete",
                icon: <DeleteIcon className={classes.iconStyle}/>
            }
            )
    }
    const handleMenuAction = (action)=> {
        if(action == "Preview") {
            props.handlePreviewPost(post.id);
        }
        else if(action == "Edit") {
            props.handleEditPost(post.id);
        }
        else if(action == "Delete") {
            props.handleDeletePost(post.id);
        }
    }
    return (
        <Card className={classes.root}>
            <div >
                <CardHeader className={classes.header}
                    avatar={
                        <Avatar aria-label={`${user.given_name} ${user.family_name}`} src={user.picture} className={classes.avatar}>
                            {user.given_name.slice(0,1)}
                        </Avatar>
                    }
                    action={
                        <div>
                        <IconButton onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.name} onClick={(e)=>handleMenuAction(option.name)}>
                                            {option.icon}<span className={classes.iconStyle}>{option.name}</span>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    }
                    title={`${user.given_name} ${user.family_name}`}
                    subheader={getCurrentDate(post.createdAt)}
                />
                <CardMedia
                    className={classes.media}
                    image={post.image ? post.image :IMAGE_NOT_AVAILABLE}
                    title={post.title}
                />
                <CardContent style={{padding:"8px"}}>
                    <Typography variant="h4" color="primary">
                        {post.title.length > 30 ?
                            post.title.slice(0, 30) + " ..."
                        :post.title
                        }
                    </Typography>
                    <Typography variant="body2" color="secondary">
                        {post.text.length > 80 ?
                            post.text.slice(0, 80) + " ..."
                            : post.text
                        }
                    </Typography>
                </CardContent>
                <div className={classes.header}>
                    <Link className={classes.link} to={props.authorized ?`blogs/preview/${post.id}`:`/preview/${post.id}`}>Read more →</Link>
                    <Typography className={classes.footer}>
                        <FavoriteIcon style={{paddingLeft:"2.5rem"}} fontSize="inherit" color="primary"/> <span style={{paddingLeft:"3px"}}>4999</span>
                    </Typography>
                </div>
            </div>
        </Card>
    )
}
export default BlogCard;