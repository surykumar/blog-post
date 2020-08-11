import React,{useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import Blogs from "./Blogs";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Components/organisms/Header";

const apiConfig = {
    custom:{
        baseURL: "https:// [actual api path] .com",
        audience: "https:// [custom api audience]",
        scope: null
    },
    management:{
        baseURL: "https:// [custom domain or {tenant}.{region}.auth0.com] .com/api/v2/",
        audience: "https:// [management api audience]",
        scope: "openid profile email read:current_user update:current_user_metadata"
    }
}

function Main(props) {
    const { loginWithRedirect, isAuthenticated, logout, user, getAccessTokenSilently} = useAuth0();
    const [userProfile, setUserProfile] = useState({});
    const [posts, setPosts] = useState([]);
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
            const userUrl = `http://localhost:3004/users`
            axios.post(userUrl, _user)
                .then(resp=>{
                    if(resp.status == 200) {
                        setUserProfile(resp.data);
                    }
                    else {
                        setUserProfile(_user);
                    }
                })
                .catch((error) => {
                    console.log('error ' + error);
                });
            getPost();
        }
        else {
            setPosts([]);
         }
    },[isAuthenticated]);

    // useEffect(() => {
    //     getPublicPost();
    //     if(isAuthenticated) {
    //         getPost();
    //         getUserMetadata();
    //     }
    //     else {
    //         setPosts([]);
    //     }
    // }, [isAuthenticated]);

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
            setUserProfile(_user);
        } catch (e) {
            setUserProfile(_user);
            console.log(e.message);
        }
    };

    const handleLogout = (e)=> {
        e.preventDefault();
        alert('user logged out successfully!');
        // setUser({});
    }
    const handleCreatePost = (event, imagePreviewUrl)=> {
        event.preventDefault();
        const _body = getBody(event, imagePreviewUrl);
        const url = `http://localhost:3004/posts`;
        axios.post(url, _body)
            .then(resp=> {
                debugger;
                if(resp.status == 201){
                    let postData = resp.data;
                    let _posts = JSON.parse(JSON.stringify(posts));
                    postData["user"] = {
                        family_name : userProfile.family_name,
                        given_name : userProfile.given_name,
                        picture: userProfile.picture
                    };
                    _posts.push(postData);
                    setPosts(_posts);
                }
            })
            .catch(err=> {
                console.log(err.response);
            })
        alert("post submitted successfully!");
    }
    const handleEditPost = (event, id, imagePreviewUrl)=> {
        event.preventDefault();
        const _body = getBody(event, imagePreviewUrl);
        const url = `http://localhost:3004/posts/${id}`;
        axios.put(url, _body)
            .then(resp=> {
                if(resp.status == 200){
                    let postData = resp.data;
                    let _posts = JSON.parse(JSON.stringify(posts));
                    postData["user"] = {
                        family_name : userProfile.family_name,
                        given_name : userProfile.given_name,
                        picture: userProfile.picture
                    };
                    const index = _posts.findIndex(data=>data.id ==id);
                    if(index >= 0) {
                        _posts[index] = postData;
                        setPosts(_posts);
                    }
                }
            })
            .catch(err=> {
                console.log(err.response);
            })
        alert("post edited successfully!");
    }
    const getBody = (event, imagePreviewUrl)=> {
        let _body = {
            "user_id": user.email,
            "title": event.target['post_title']['value'],
            "text": event.target['post_body']['value'],
            "image": imagePreviewUrl ? imagePreviewUrl: "",
            "comments" : [
                {
                    "user_id": "",
                    "comment": "",
                    "replies": [
                        {
                            "user_id": "",
                            "reply" : ""
                        }
                    ]
                }
            ]
        }
        return _body;
    }
    const handleDeletePost = (id)=> {
        const url = `http://localhost:3004/posts/${id}`;
        axios.delete(url)
            .then(resp=> {
                if(resp.status == 200){
                    const filteredPost = posts.filter(post=> post.id !=id);
                    setPosts(filteredPost);
                }
            })
            .catch(err=> {
                console.log(err.response.error);
            })
    }
    const  loginUser =  async ()=> {
        await loginWithRedirect({
            redirect_uri: 'http://localhost:3000/blogs'
        });
    }

    const getPost = ()=> {
        const url = `http://localhost:3004/posts?id=${user.email}`;
        axios.get(url)
            .then(resp=>{
                if(resp.status == 200){
                    setPosts(resp.data)
                }
            })
            .catch(err=>{
                console.log(err);
                setPosts([]);
            })
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

    const handleUpdateProfile = async (event,imgUrl)=> {
        event.preventDefault();
        const email = event.target['email']['value'];
        const _user = {
            given_name: event.target['firstName']['value'],
            family_name: event.target['lastName']['value'],
            bio: event.target['bio']['value'],
            picture: imgUrl,
            uuid: userProfile.uuid
        };
        const url = `http://localhost:3004/users/${email}`;
        await axios.put(url, _user)
            .then(resp=> {
                if(resp.status == 200){
                    setUserProfile(resp.data);
                }
            })
            .catch(err=> {
                console.log(err.response.error);
            })
        getPost();
        alert("post edited successfully!");
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
                    setUserProfile(user_metadata);
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
            <Header loginWithRedirect={loginUser} logout={logout} user={userProfile}/>
            <Switch>
                <Route path="/blogs">
                    {isAuthenticated ?
                        <Blogs user={userProfile} posts={posts}
                                              handleLogout={handleLogout}
                                              handleCreatePost={handleCreatePost}
                                              handleEditPost={handleEditPost}
                                              handleDeletePost={handleDeletePost}
                                              handleUpdateProfile={handleUpdateProfile}/>
                                         : <Redirect to="/" />
                     }
                </Route>
                <Route path="/">
                    <Home posts={publicPosts}/>
                </Route>
            </Switch>
        </Router>
    )
}
const login= (e)=> {
    e.preventDefault();
    axios.get('http://localhost:3004/posts')
        .then(resp=> {
            alert(resp.data.message);
        })
        .catch(err=> {
            console.log(err);
        })
}
export default Main;