import React, {useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ProfileImageUpload from "../molecules/ProfileImageUpload";
import {useParams} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: "3% auto",
    },
    avatar: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        "&:hover": {
            opacity: "0.75",
        }
    },
    inlineDisplay: {
        display: "flex",
        padding: theme.spacing(4)
    },
    button: {
        marginLeft: theme.spacing(4),
        color: theme.palette.neutral.main
    },
    textAreaField: {
        marginTop: theme.spacing(20),
        // marginLeft: theme.spacing(5),
        width: '22rem',
        fontSize: "1rem",
        fontFamily: "Arial",
        letterSpacing: "0.095rem"
    },
    textField: {
        width: '22rem',
        fontSize: "1rem",
        fontFamily: "Arial",
        letterSpacing: "0.095rem"
    },
    uploadImgIcon: {
        position: "absolute",
        bottom: 0,
        right: "3rem",
        backgroundColor: theme.palette.neutral.main,
        color: theme.palette.secondary.main,
        "&:hover":{
            backgroundColor: theme.palette.neutral.main,
            color: theme.palette.primary.main,
        }
    }
}));
const BlogProfile = (props) => {
    let { userId } = useParams();
    const [firstName, setFirstName] = useState(props.user.given_name);
    const [lastName, setLastName] = useState(props.user.family_name);
    const [bio, setBio] = useState(props.user.bio);
    const [profileUrl, setProfileUrl] = useState(props.user.picture);
    // const [email, setL] = useState(props.user.family_name);
    const handleTextAreaChange= (e)=> {
        e.preventDefault();
        setBio(e.target.value);
    }
    const handleImageChange = function(event) {
        event.preventDefault();
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setProfileUrl(reader.result);
        }
    };
    const handleUpdateProfile = (e)=> {
        props.handleUpdateProfile(e, profileUrl);
        setTimeout(()=>{
            props.history.push(`/blogs/${userId}`);
        });
    }

    const classes = useStyles();
    return (
                <Container maxWidth="xl">
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdateProfile}>
                        <Grid className={classes.inlineDisplay}>
                            <ProfileImageUpload profileUrl={profileUrl} user={props.user} handleImageChange={handleImageChange}/>
                            <TextareaAutosize value={bio} id="bio" required className={classes.textAreaField} aria-label="minimum height"
                                              rowsMin={3} placeholder="Write something about yourself!" onChange={handleTextAreaChange}/>
                        </Grid>
                        <Grid className={classes.inlineDisplay}>
                            <Typography style={{width:"15rem"}}>First Name: </Typography>
                            <TextField
                                className={classes.textField}
                                value={firstName}
                                variant="outlined"
                                required
                                id="firstName"
                                // label="First Name"
                                name="firstName"
                                onChange={(e)=>{setFirstName(e.target.value)}}
                                size="small"
                            />
                        </Grid>
                        <Grid className={classes.inlineDisplay}>
                            <Typography style={{width:"15rem"}}>Last Name: </Typography>
                            <TextField
                                className={classes.textField}
                                value={lastName}
                                variant="outlined"
                                required
                                id="lastName"
                                onChange={(e)=>{setLastName(e.target.value)}}
                                name="lastName"
                                size="small"
                            />
                        </Grid>
                        <Grid className={classes.inlineDisplay}>
                            <Typography style={{width:"15rem"}}>Email: </Typography>
                            <TextField
                                className={classes.textField}
                                value={props.user.id}
                                variant="outlined"
                                disabled
                                id="email"
                                name="email"
                                size="small"
                            />
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >Update</Button>
                    </form>
                </Container>

    );
};

export default BlogProfile;