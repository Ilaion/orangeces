import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
    post: [
        {postMessage: 'Its my first post on final version my social network', likesCount: ' ' + 3, id: 1},
        {postMessage: 'I think my end version this project will be great!', likesCount: ' ' + 22, id: 2}
    ],
    profileData: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                postMessage: action.newPostText,
                id: 3,
                likesCount: 0
            }
            return {
                ...state,
                post: [...state.post, post]
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileData: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                post: state.post.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }
}

export let addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
})

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export let deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const profileThunk = (userId) => async (dispatch) => {
    let data = await usersAPI.profile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;