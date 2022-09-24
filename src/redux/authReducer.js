import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';


let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captcha:null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        {
            return {
                ...state,
                ...action.payload
            }
        }
        case GET_CAPTCHA_SUCCESS: {
            return {
                ...state,
                captcha: action.payload
            }
        }
        default:
            return state;
    }
}

export let setUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuth}
})

export let getCaptchaSuccess = (captcha) => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: captcha
})

export const authThunk = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(setUserData(email, id, login, true));
    }
}

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authThunk())
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaThunk())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}


export const logoutThunk = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaThunk = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaSuccess(captchaUrl))
}

export default authReducer;