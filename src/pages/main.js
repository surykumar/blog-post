import React,{useState, useEffect} from "react";
import axios from 'axios';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import Blogs from "./blogs";
import Signin from "./signin";
import Signup from "./signup";
import Home from "./home";

function Main(props) {
    let isLogin = props.allowLogin;
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    // setIsLoggedIn(isLogin);
    const _user = {
        "id": "thomas.edition@zyz.com",
        "email": "thomas.shelby@zyz.com",
        "password": "xyz",
        "profile": {
            "avatar":"https://watchmojo.com/uploads/thumbs720/WMUK-Fi-M-Top10-Cillian-Murphy-Performances_O2B3A3.jpg",
            "firstName": "Thomas",
            "lastName": "Shelby",
            "email": "thomas.shelby@zyz.com",
        },
        "posts": [
            {   "id": 1,
                "user_id": "thomas.edition@zyz.com",
                "full name": "Thomas Shelby",
                "title": "My first post!",
                "text": "Hey this post is about Java Script!",
                "image": "https://www.mail-signatures.com/wp-content/uploads/2019/02/How-to-find-direct-link-to-image_Blog-Picture.png",
                "createdAt": 1596029068573,
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
            },
            {   "id": 2,
                "user_id": "surya.kant@zyz.com",
                "full name": "Surya kant",
                "title": "Java script Event loop!",
                "text": "What the heck is javascript event loop!",
                "image": "https://skywell.software/wp-content/uploads/2019/09/javascript-test-tools-1024x637.jpg",
                "createdAt": 1596029068573,
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
        ]
    }
    const [user, setUser] = useState(props.allowLogin ? props._user.profile:{});
    const [posts, setPosts] = useState(props.allowLogin ? props._user.posts:[]);
    // const [user, setUser] = useState(_user.profile);
    // const [posts, setPosts] = useState(_user.posts);
    const handleSignup = (e)=> {
        alert("user created successfully!");
    }
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     console.log("is logged in is" + props.allowLogin);
    //     setIsLoggedIn(props.allowLogin);
    //     setUser(props._user.profile);
    //     setPosts(props._user.posts);
    // });
    const handleSignin = (e)=> {
        e.preventDefault();
        const url = `http://localhost:3004/signin?email=${e.target.email.value}&password=${e.target.password.value}`
        axios.get(url)
            .then(resp=> {
                if(resp.status == 200){
                    const _user = {
                        email: resp.data.email
                    }
                    Object.assign(_user, resp.data.profile);
                    setUser(_user);
                    setPosts(resp.data.posts);
                    setIsLoggedIn(true);
                }
            })
            .catch(err=> {
                console.log(err);
                setUser({});
                setPosts([]);
                setIsLoggedIn(false);
            })
    }
    const handleLogout = (e)=> {
        e.preventDefault();
        alert('user logged out successfully!');
        setIsLoggedIn(false);
        setUser({});
    }
    const handleCreatePost = (event, imagePreviewUrl)=> {
        event.preventDefault();
        const _body = getBody(event, imagePreviewUrl);
        const url = `http://localhost:3004/posts`;
        axios.post(url, _body)
            .then(resp=> {
                if(resp.status == 201){
                    let _post = JSON.parse(JSON.stringify(posts));
                    _post.push(resp.data);
                    setPosts(_post);
                    setIsLoggedIn(true);
                }
            })
            .catch(err=> {
                console.log(err.response.error);
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
                    let _post = JSON.parse(JSON.stringify(posts));
                    const index = _post.findIndex(data=>data.id ==id);
                    if(index >= 0) {
                        _post[index] = resp.data;
                        setPosts(_post);
                        setIsLoggedIn(true);
                    }
                }
            })
            .catch(err=> {
                console.log(err.response.error);
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
                console.log("response after deleting post!", resp);
                if(resp.status == 200){
                    const filteredPost = posts.filter(post=> post.id !=id);
                    setPosts(filteredPost);
                    setIsLoggedIn(true);
                }
            })
            .catch(err=> {
                console.log(err.response.error);
            })
        alert("post submitted!");
    }
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home_Test</Link>
                        </li>
                        <li>
                            <Link to="/signin">Signin</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/blogs">
                        {isLoggedIn ? <Blogs user={user} posts={posts} handleLogout={handleLogout} handleCreatePost={handleCreatePost} handleEditPost={handleEditPost} handleDeletePost={handleDeletePost}/>: <Redirect to="/signin" /> }
                    </Route>
                    <Route path="/signup">
                        {isLoggedIn ? <Redirect to="/blogs" /> : <Signup onSubmit={handleSignup}/>}
                    </Route>
                    <Route path="/signin">
                        {isLoggedIn ? <Redirect to="/blogs" /> : <Signin onSubmit={handleSignin}/>}
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
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