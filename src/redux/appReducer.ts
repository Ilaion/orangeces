import {authThunk} from "./authReducer.ts";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false
};

type initialStateType = typeof initialState

const initializeReducer = (state = initialState, action: any) : initialStateType=> {
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

type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

export let initializedSuccess = () : initializedSuccessType => ({
    type: INITIALIZED_SUCCESS
})

export const initThunk = () => {
    return (dispatch : any) =>{
        let promise = dispatch(authThunk());

        promise.then(() => {
            dispatch(initializedSuccess());
        });
    }
}

export default initializeReducer;