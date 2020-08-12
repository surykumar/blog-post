import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const middleWare = [thunk];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))
export default store;
