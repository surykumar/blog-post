import { combineReducers} from "redux";
import PostReducer from "./PostReducer";
import ProfileReducer from "./ProfileReducer";
export default combineReducers({
    posts: PostReducer,
    user: ProfileReducer
});