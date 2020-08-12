import axios from "axios";
export const createProfile = (user) => (dispatch) => {
    console.log("fetching profile...")
    const userUrl = `http://localhost:3004/users`
    axios.post(userUrl, user)
        .then(res=>{
            let responseData = user;
            if(res.status == 200) responseData = res.data
            dispatch({
                type: "CREATE_PROFILE",
                payload: responseData
            })
        })
        .catch((error) => {
            console.log('error ' + error);
        });
}

export const updateProfile = (user) => (dispatch) => {
    console.log("updating profile...")
    const url = `http://localhost:3004/users/${user.id}`;
    axios.put(url, user)
        .then(res=> {
            if(res.status == 200){
                dispatch({
                    type: "UPDATE_PROFILE",
                    payload: res.data
                })
            }
        })
        .catch(err=> {
            console.log(err.response.error);
        })
}