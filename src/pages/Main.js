import React,{useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import Blogs from "./Blogs";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Components/organisms/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import { createProfile } from "../actions/userActions";

function Main(props) {
    const dispatch = useDispatch();
    const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently} = useAuth0();
    const [publicPosts, setPublicPosts] = useState([]);
    useEffect(() => {
        getPublicPost();
        if(isAuthenticated) {
            const _user = {
                given_name: user.given_name,
                family_name: user.family_name,
                bio: "",
                picture: user.picture,
                id: user.email,
                uuid:""
            };
            dispatch(createProfile(_user));
            dispatch(fetchPosts(user.email));
        }
    },[isAuthenticated]);


// getUserMetadata return userMetaData of auth0 logged in user!
    const getUserMetadata = async () => {
        const domain = "dev-4eke6ze7.us.auth0.com";
        let _user = {
            given_name:  user.given_name,
            family_name:  user.family_name,
            bio: "" ,
            picture: user.picture,
            id: user.email
        };
        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "update:users",
            });
            console.log("Access token is ", accessToken);
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
            const metadataResponse = await fetch(userDetailsByIdUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const { user_metadata } = await metadataResponse.json();
            _user = {
                given_name: user_metadata && user_metadata.given_name ? user_metadata.given_name : user.given_name,
                family_name: user_metadata && user_metadata.family_name ? user_metadata.family_name : user.family_name,
                bio: user_metadata && user_metadata.bio ?user_metadata.bio :"" ,
                picture: user_metadata && user_metadata.picture ? user_metadata.picture: user.picture,
                id: user.email
            };
            // dispatch(createProfile(_user));
        } catch (e) {
            console.log(e.message);
        }
    };

    const  loginUser =  async ()=> {
        await loginWithRedirect({
            redirect_uri: 'http://localhost:3000/blogs'
        });
    }

    const getPublicPost=()=> {
        const url = "http://localhost:3004/posts";
        axios.get(url)
            .then(resp=>{
                if(resp.status == 200){
                    setPublicPosts(resp.data)
                }
            })
            .catch(err=>{
                console.log(err);
                setPublicPosts([]);
            })
    }

    // handleUpdateProfileDetail function can be used for updating user details inside auth0 itself!
    const handleUpdateProfileDetail = async (event,imgUrl)=> {
        event.preventDefault();
        const email = event.target['email']['value'];
        const userBody = {
            user_metadata: {
                bio: event.target['bio']['value'],
                given_name: event.target['firstName']['value'],
                family_name: event.target['lastName']['value'],
                picture: imgUrl,
            }
        };
        console.log("getTokenSilently...",getAccessTokenSilently);
        try {
            const token = await getAccessTokenSilently({
                audience: "https://dev-4eke6ze7.us.auth0.com/api/v2/",
                scope: "update:current_user_metadata",
            })
            const URL = `https://dev-4eke6ze7.us.auth0.com/api/v2/users/${user.sub}`;
            axios.patch(URL, userBody,{ headers: { Authorization: `Bearer ${token}` } })
                .then(response => {
                    console.log(response.data);
                    const user_metadata = response.data.user_metadata;
                    dispatch(createProfile(user_metadata));
                })
                .catch((error) => {
                    console.log('error ' + error);
                });
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <Router>
            <Header loginWithRedirect={loginUser} logout={logout}/>
            <Switch>
                <Route path="/blogs">
                    {/*{isAuthenticated ?*/}
                        <Blogs />
                     {/*: <Redirect to="/" />*/}
                     {/*}*/}
                </Route>
                <Route path="/">
                    <Home posts={publicPosts}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Main;