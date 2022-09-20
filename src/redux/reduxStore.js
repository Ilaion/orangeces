import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import friendReducer from "./friendReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import initializeReducer from "./appReducer";



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