import axios from "axios";
export const fetchPosts = (email) => (dispatch) => {
    console.log("fetching...")
    const url = `http://localhost:3004/posts?id=${email}`;
    axios.get(url)
        .then(resp=>{
            if(resp.status == 200){
                dispatch({
                    type: "FETCH_POSTS",
                    payload: resp.data
                })
            }
        })
        .catch(err=>{
            console.log(err);
            dispatch({
                type: "FETCH_POSTS",
                payload: []
            })
        })
}
export const createPost = (body) => (dispatch) => {
    console.log("creating...")
    const url = `http://localhost:3004/posts`;
    axios.post(url, body)
        .then(res => {
            if(res.status == 200){
                dispatch({
                    type: "CREATE_POST",
                    payload: res.data
                })
            }
        })
        .catch(err=> {
            console.log(err.response);
        })
}
export const editPost = (body) => (dispatch) => {
    console.log("editing...")
    const url = `http://localhost:3004/posts`;
    axios.put(url, body)
        .then(res=> {
            if(res.status == 200){
                dispatch({
                    type: "EDIT_POST",
                    payload: res.data
                })
            }
        })
        .catch(err=> {
            console.log(err.response);
        })
}
export const deletePost = (id) => (dispatch) => {
    console.log("editing...")
    const url = `http://localhost:3004/posts/${id}`;
    axios.delete(url)
        .then(resp=> {
            if(resp.status == 200){
                dispatch({
                    type: "DELETE_POST",
                    payload: id
                })
            }
        })
        .catch(err=> {
            console.log(err.response.error);
        })
}