import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Avatar from "@material-ui/core/Avatar";
import IconButton from '@material-ui/core/IconButton';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from '@material-ui/icons/Code';
import CancelIcon from '@material-ui/icons/Cancel';
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "3% auto",
    },
    textField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
        fontSize: '2rem',
        fontFamily: "Arial",
    },
    textAreaField: {
        // marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
        fontSize: "1rem",
        fontFamily: "Arial",
        letterSpacing: "0.095rem"
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
    },
    resize:{
        fontSize: "2rem"
    },

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
                        {/*<TextField*/}
                        {/*    required*/}
                        {/*    id="post_title"*/}
                        {/*    value={post.title}*/}
                        {/*    className={classes.textField}*/}
                        {/*    placeholder="Add post title..."*/}
                        {/*    margin="normal"*/}
                        {/*    InputProps={{*/}
                        {/*        shrink: true,*/}
                        {/*        classes: {*/}
                        {/*            input: classes.resize,*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*/>*/}
                    </div>
                    <div className={classes.body}>
                        <Typography color="secondary" variant="body1">
                            {post.text}
                        </Typography>
                        {/*<TextareaAutosize value={post.text} id="post_body" required className={classes.textAreaField} aria-label="minimum height"*/}
                        {/*                  rowsMin={20} placeholder="Start writing your post here. Add images and more."/>*/}
                    </div>
                    <div className={classes.body}>
                        {/*<Typography variant="subtitle1">*/}
                        {/*    Image*/}
                        {/*</Typography>*/}
                        {/*<input*/}
                        {/*    accept="image/*"*/}
                        {/*    className={classes.input}*/}
                        {/*    id="post_images"*/}
                        {/*    type="file"*/}
                        {/*    onChange={_handleImageChange}*/}
                        {/*    onClick={event => {*/}
                        {/*        event.target.value = null;*/}
                        {/*    }}*/}
                        {/*/>*/}
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