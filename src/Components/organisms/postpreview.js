import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "3% auto",
    },
    imgPreview: {
        textAlign: "center",
        margin: "5px",
        height: "400px",
        width: "100%",
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderTop: "5px solid gray",
        borderBottom: "5px solid gray",
    },
    body: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display:"flex",
        textAlign:"justify"
    }
}));

function PostPreview(props) {
    const classes = useStyles();
    let { postId } = useParams();
    const post = props.posts.find(data=>data.id==postId);
    if(!post) {
        return;
    }
    const getCurrentDate = (data)=> {
        const d = new Date(data);
        return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear()
    }
    const averageReadingTime = (str)=> {
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");
        const length = str.split(' ').length;
        if(length < 200) return 1;
        return Math. ceil(length/200);
    }
    return (
        <div>
            <Container maxWidth="xl">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className={classes.body}>
                        <Avatar aria-label={`${props.user.firstName} ${props.user.lastName}`} src={props.user.avatar} className={classes.avatar}>
                            {props.user.firstName.slice(0,1)}
                        </Avatar>
                        <Typography color="secondary" variant="body1" style={{paddingLeft:"12px", width:"100%"}}>
                            <Typography style={{display:"flex"}}>
                                {props.user.firstName }
                                <Typography variant="body2" color="primary" style={{padding:"3px", width:"100%", textAlign:"end"}}>
                                    {averageReadingTime(post.text)} minute read . {"Characters"}: {post.text.length}
                                </Typography>
                            </Typography>
                            <Typography>{getCurrentDate(post.createdAt)}</Typography>
                        </Typography>
                    </div>
                    <div className={classes.body}>
                        <Typography color="secondary" variant="h4">
                            {post.title}
                        </Typography>
                    </div>
                    <div className={classes.body}>
                        <Typography color="secondary" variant="body1">
                            {post.text}
                        </Typography>
                    </div>
                    <div className={classes.body}>
                        <div style={{width:"100%"}}>
                            {post.image &&
                                <img className={classes.imgPreview} src={post.image}/>
                            }
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}
export default PostPreview;