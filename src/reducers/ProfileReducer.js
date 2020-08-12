const ProfileReducer = (state = {}, action)=>{
    switch (action.type){
        case 'CREATE_PROFILE':
            return action.payload;
        case 'UPDATE_PROFILE':
            return action.payload;
        default:
            return state;
    }
}
export default ProfileReducer;