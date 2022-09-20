import {authThunk} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

const initializeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export let initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})

export const initThunk = () => {
    return (dispatch) =>{
        let promise = dispatch(authThunk());

        promise.then(() => {
            dispatch(initializedSuccess());
        });
    }
}

export default initializeReducer;