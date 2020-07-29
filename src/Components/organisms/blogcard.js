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
import { red } from '@material-ui/core/colors';
import {Link, Redirect, useRouteMatch} from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            margin: "3% auto 0 auto",
            width:'50%',
            border: "1px solid lightgrey"
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
            width: 700
        },
        cover: {
            width: 200,
            margin:10
        },
        avatar: {
            backgroundColor: red[500],
        },
        header: {
            padding:8,
        },
        link: {
            textDecoration:"none",
            color:theme.palette.primary.main
        },
        iconStyle: {
            marginRight: "10px",
            color: theme.palette.secondary.main
        }
    })
)

const ITEM_HEIGHT = 48;
function BlogCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = props.user;
    const post = props.post;
    let match = useRouteMatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const getCurrentDate = (data)=> {
        const d = new Date(data);
        return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    }
    const options = [
        {
            name: "Preview",
            icon: <VisibilityIcon className={classes.iconStyle}/>
        },
        {
            name: "Edit",
            icon: <EditIcon className={classes.iconStyle}/>
        },
        {
            name:"Delete",
            icon: <DeleteIcon className={classes.iconStyle}/>
        }
    ];
    const handleMenuAction = (action)=> {
        console.log("props of blogcard is" + props);
        if(action == "Preview") {
            props.history.push(`/blogs/preview/${post.id}`);
        }
        else if(action == "Edit") {
            props.history.push(`/blogs/edit/${post.id}`);
        }
        else if(action == "Delete") {
            props.handleDeletePost(post.id);
        }
        console.log("Handle menu actions" + action);
        // console.log("Event of menu actions" + e);
    }
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={post.image ? post.image :"https://bostonparkingspaces.com/wp-content/themes/classiera/images/nothumb/nothumb370x300.png"}
                title={post.title}
            />
            <div className={classes.details}>
                <CardHeader className={classes.header}
                    avatar={
                        <Avatar aria-label={`${user.firstName} ${user.lastName}`} src={user.avatar} className={classes.avatar}>
                            {props.user.firstName.slice(0,1)}
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
                                PaperProps={{
                                    style: {
                                        // maxHeight: ITEM_HEIGHT * 4.5,
                                        // width: '20ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <MenuItem key={option} onClick={(e)=>handleMenuAction(option.name)}>
                                            {option.icon}<span className={classes.iconStyle}>{option.name}</span>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    }
                    title={`${user.firstName} ${user.lastName}`}
                    subheader={getCurrentDate(post.createdAt)}
                />
                <CardContent className={classes.header}>
                    <Typography variant="body1">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.text.length > 200 ?
                            post.text.slice(0, 200) + " ..."
                            : post.text
                        }
                    </Typography>
                </CardContent>
                <div className={classes.header}>
                    <Link className={classes.link} to={`${match.url}/preview/${post.id}`}>Read more →</Link>
                </div>
            </div>
        </Card>
    )
}
export default BlogCard;