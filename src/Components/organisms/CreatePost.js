import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IconButton from '@material-ui/core/IconButton';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CodeIcon from '@material-ui/icons/Code';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "3% auto",
    },
    textField: {
        marginRight: theme.spacing(2),
        width: '100%'
    },
    textAreaField: {
        marginTop: theme.spacing(2),
        // marginBottom: theme.spacing(2),
        width: '100%',
        fontSize: theme.typography.h5.fontSize,
        fontFamily: theme.typography.h5.fontFamily,
        letterSpacing: "0.095rem"
    },
    imgPreview: {
        textAlign: "center",
        margin: "5px",
        height: "300px",
        width: "100%",
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderTop: "5px solid gray",
        borderBottom: "5px solid gray",
    },
    body: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    resize:{
        fontSize: theme.typography.h2.fontSize,
        fontFamily: theme.typography.h2.fontFamily
    },

}));

function CreatePost(props) {
    let { postId, userId } = useParams();
    const post = props.edit && props.posts.find(data=>data.id==postId);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(props.edit ? post.image : "");
    const [postTitle, setPostTitle] = useState(props.edit ? post.title:"");
    const [postBody, setPostBody] = useState(props.edit ? post.text : "");
    const classes = useStyles();
    const _handleImageChange = function(event) {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setImagePreviewUrl(reader.result);
        }
    };

    const handleCreatePost= (e, imagePreviewUrl)=> {
        e.preventDefault();
        if(props.edit) {
            props.handleEditPost(e,post.id, imagePreviewUrl);
        }
        else {
            props.handleCreatePost(e, imagePreviewUrl);
        }
        setTimeout(()=>{
            // props.history.push(`/blogs/${props.user.uuid}`);
            props.history.push(`/blogs/${userId}`);
        });
    }

    const handleClearImage= (e)=> {
        e.preventDefault();
        setImagePreviewUrl("");
    }

    const handleTextFieldChange= (e)=> {
        e.preventDefault();
        setPostTitle(e.target.value);
    }

    const handleTextAreaChange= (e)=> {
        e.preventDefault();
        setPostBody(e.target.value);
    }

    return (
        <div>
            <Container maxWidth="xl">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e)=>handleCreatePost(e, imagePreviewUrl)}>
                <div className={classes.body}>
                <TextField
                    required
                    id="post_title"
                    value={postTitle}
                    className={classes.textField}
                    placeholder="Add post title..."
                    margin="normal"
                    InputProps={{
                        shrink: true,
                        classes: {
                            input: classes.resize,
                        }
                    }}
                    onChange={handleTextFieldChange}
                />
                </div>
                <div className={classes.body}>
                <TextareaAutosize value={postBody} id="post_body" required className={classes.textAreaField} aria-label="minimum height"
                                  rowsMin={20} placeholder="Start writing your post here. Add images and more." onChange={handleTextAreaChange}/>
                </div>
                <div className={classes.body}>
                    <div className="imgPreview">
                        {imagePreviewUrl &&
                            <img className={classes.imgPreview} src={imagePreviewUrl}/>

                        }
                    </div>
                </div>
                <div className={classes.body}>
                    <hr/>
                    <div>
                        <input
                            style={{ display: 'none' }}
                            accept="image/*"
                            className={classes.input}
                            id="post_image"
                            type="file"
                            onChange={_handleImageChange}
                            onClick={event => {
                                event.target.value = null;
                            }}
                        />
                        <label htmlFor="post_image">
                            {imagePreviewUrl ?
                                <IconButton aria-label="Clear Image" className={classes.icon} onClick={handleClearImage}>
                                    <CancelIcon color="primary"/>
                                </IconButton>
                                :
                                <IconButton aria-label="Image upload" component="span" className={classes.icon}>
                                    <CameraAltIcon color="primary"/>
                                </IconButton>
                            }
                        </label>
                        <IconButton aria-label="add code snippet" className={classes.icon}>
                            <CodeIcon aria-label="Image upload" />
                        </IconButton>
                    </div>
                    <hr/>
                </div>
                <div className={classes.body}>
                    <Button disabled={!postTitle.length} type="submit" variant="contained" color="primary">
                        {props.edit ? "Save": "Publish"}
                    </Button>
                </div>
            </form>
            </Container>
        </div>
    )
}
export default CreatePost;