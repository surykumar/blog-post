import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "3% auto",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    textAreaField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    imgPreview: {
        textAlign: "center",
        margin: "5px",
        height: "300px",
        width: "100%",
        "borderLeft": "1px solid gray",
        "borderRight": "1px solid gray",
        "borderTop": "5px solid gray",
        "borderBottom": "5px solid gray",
    }
}));

function EditPost(props) {
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
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
    // const _handleSubmit = (event)=> {
    //     event.preventDefault();
    //     alert("post submitted!")
    // }


    return (
        <div>
            <Container maxWidth="xl">
                <form className={classes.root} noValidate autoComplete="off" onSubmit={(e)=>props.handleCreatePost(e, imagePreviewUrl)}>
                    <div>
                        <Typography component="h1" variant="h5">
                            Title
                        </Typography>
                        <TextField
                            required
                            id="post_title"
                            className={classes.textField}
                            placeholder="Add post title..."
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div>
                        <Typography component="h1" variant="h5">
                            Body
                        </Typography>
                        <TextareaAutosize id="post_body" required className={classes.textAreaField} aria-label="minimum height" rowsMin={20} placeholder="Add post body" />
                    </div>
                    <div>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="post_image"
                            type="file"
                            onChange={_handleImageChange}
                            onClick={event => {
                                event.target.value = null;
                            }}
                        />
                        <div className="imgPreview">
                            {imagePreviewUrl ?
                                <img className={classes.imgPreview} src={imagePreviewUrl}/>
                                :
                                <Typography variant="subtitle1" gutterBottom>
                                    Please upload an image!
                                </Typography>
                            }
                        </div>
                    </div>
                    <div>
                        <Button type="submit" variant="contained">
                            Publish
                        </Button>
                    </div>

                </form>
            </Container>
        </div>
    )
}
export default EditPost;