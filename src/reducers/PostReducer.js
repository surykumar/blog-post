const PostReducer = (state = [], action)=>{
    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        case 'CREATE_POST':
            return state.concat(action.payload);
        case 'EDIT_POST':
            const index = state.findIndex(data=>data.id ==action.payload.id);
            return Object.assign([], state, {[index]:action.payload});
        case 'DELETE_POST':
            return state.filter(post=> post.id != action.payload)
        default:
            return state;
    }
}
export default PostReducer;