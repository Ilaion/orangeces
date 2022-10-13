import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS';


let initialState = {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false,
    captcha:null as string | null
};

type initialStateType = typeof initialState;

const authReducer = (state = initialState, action : any) : initialStateType => {
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

type SetUserPayloadType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}

type setUserDataType = {
    type: typeof SET_USER_DATA
    payload:SetUserPayloadType
}

export let setUserData = (email : string | null, id: number | null, login : string | null, isAuth: boolean) : setUserDataType => ({
    type: SET_USER_DATA,
    payload: {email, id, login, isAuth}
})

type getCaptchaSuccessType = {
    type: typeof GET_CAPTCHA_SUCCESS
    payload: string
}

export let getCaptchaSuccess = (captcha) : getCaptchaSuccessType => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: captcha
})

export const authThunk = () => async (dispatch:any) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data;
        dispatch(setUserData(email, id, login, true));
    }
}

export const loginThunk = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch: any) => {
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


export const logoutThunk = () => async (dispatch:any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaThunk = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaSuccess(captchaUrl))
}

export default authReducer;