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
import {Link} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import {Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {deletePost} from "../../actions/postActions";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CommentCount from "../molecules/CommentCount";

const useStyles = makeStyles((theme) => ({
        root: {
            // display: 'flex',
            margin: "3%",
            // width:'50%',
            width: 324,
            height:400,
            border: "1px solid lightgrey",
            position: "relative"
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
        favoriteIcon: {
            position: "absolute",
            right: "1rem"
            // paddingBottom:"0.5rem"
        },
        favoriteIconStyles: {
            fontSize: "0.75rem",
            color: "grey",
            padding: "2px",
            display: "flex"
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
    const dispatch = useDispatch();

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
            dispatch(deletePost(post.id));
            handleClose();
        }
    }
    const getParsedBody = (body)=> {
        let div = document.createElement("div");
        div.innerHTML = body;
        let text = div.textContent || div.innerText || "";
        if(text.length > 80) {
            return text.slice(0,80) + " ..."
        }
        return text;
    }
    const getCardMediaFromPostBody = (body)=> {
        if(!body) return IMAGE_NOT_AVAILABLE;
        let div = document.createElement('div');
        div.innerHTML = body;
        let firstImage = div.getElementsByTagName('img')[0];
        let imgSrc = firstImage ? firstImage.src : IMAGE_NOT_AVAILABLE;
        return imgSrc;

    }
    return (
        <Card className={classes.root}>
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
                    // image={post.image ? post.image :IMAGE_NOT_AVAILABLE}
                    image={getCardMediaFromPostBody(post.text)}
                    title={post.title}
                />
                <CardContent style={{padding:"8px", height: "65px"}}>
                    <Typography variant="h4" color="primary">
                        {post.title.length > 30 ?
                            post.title.slice(0, 30) + " ..."
                        :post.title
                        }
                    </Typography>
                    <Typography variant="body2" color="secondary">
                        {getParsedBody(post.text)}
                    </Typography>
                </CardContent>
            <Grid className={classes.header}>
                <Link className={classes.link} to={props.authorized ?`${user.uuid}/preview/${post.id}`:`/preview/${post.id}`}>Read more →</Link>
                <Grid className={classes.favoriteIcon}>
                    <Typography className={classes.favoriteIconStyles}>
                        <Grid style={{paddingTop:"1px"}}>
                            <InsertCommentIcon fontSize="inherit" color="primary"/>
                        </Grid>
                        <span style={{paddingLeft:"3px"}}>
                            <CommentCount post={props.post}/>
                        </span>
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}
export default BlogCard;