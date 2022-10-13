import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer.ts";
import dialogReducer from "./dialogReducer.ts";
import friendReducer from "./friendReducer.ts";
import UsersReducer from "./UsersReducer.ts";
import authReducer from "./authReducer.ts";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import initializeReducer from "./appReducer.ts";



let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogReducer,
    friend: friendReducer,
    users: UsersReducer,
    auth: authReducer,
    form: formReducer,
    initialize: initializeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

window.store = store;