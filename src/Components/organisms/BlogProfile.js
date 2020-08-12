import React, {useEffect, useState} from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ProfileImageUpload from "../molecules/ProfileImageUpload";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../actions/userActions";
import {fetchPosts} from "../../actions/postActions";
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
    const user = useSelector(state=> state.user);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [profileUrl, setProfileUrl] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        setFirstName(user.given_name ? user.given_name : "");
        setLastName(user.family_name ? user.family_name : "");
        setBio(user.bio ? user.bio : "");
        setGithubLink(user.github ? user.github : "");
        setProfileUrl(user.picture ? user.picture :"");
    },[user])

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
    const handleUpdateProfile = async (event)=> {
        event.preventDefault();
        const _user = {
            given_name: firstName,
            family_name: lastName,
            bio: bio,
            picture: profileUrl,
            uuid: user.uuid,
            github: githubLink,
            id:user.id
        };
        await dispatch(updateProfile(_user));
        setTimeout(()=>{
            dispatch(fetchPosts(user.id));
            props.history.push(`/blogs/${userId}`);
        });
    }

    const classes = useStyles();
    return (
                <Container maxWidth="xl">
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdateProfile}>
                        <Grid className={classes.inlineDisplay}>
                            <ProfileImageUpload profileUrl={profileUrl} handleImageChange={handleImageChange}/>
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
                            <Typography style={{width:"15rem"}}>Github: </Typography>
                            <TextField
                                className={classes.textField}
                                value={githubLink}
                                variant="outlined"
                                required
                                id="github"
                                onChange={(e)=>{setGithubLink(e.target.value)}}
                                name="github"
                                size="small"
                            />
                        </Grid>
                        <Grid className={classes.inlineDisplay}>
                            <Typography style={{width:"15rem"}}>Email: </Typography>
                            <TextField
                                className={classes.textField}
                                value={user.id}
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