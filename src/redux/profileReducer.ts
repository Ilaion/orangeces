import {profileAPI, usersAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/type";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';


let initialState = {
    post: [
        {postMessage: 'Its my first post on final version my social network', likesCount: ' ' + 3, id: 1},
        {postMessage: 'I think my end version this project will be great!', likesCount: ' ' + 22, id: 2}
    ] as Array<PostType>,
    profileData: null as ProfileType | null,
    status: ""
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
        case SET_PHOTO_SUCCESS: {
            return {
                ...state,
                profileData: {...state.profileData, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}

export let addPost = (newPostText:string): AddPostType => ({
    type: ADD_POST,
    newPostText
})

type SetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export let setUserProfile = (profile:ProfileType): SetUserProfile => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

export let setStatus = (status:string): SetStatusType => {
    return {
        type: SET_STATUS,
        status
    }
}

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}

export let deletePost = (postId:number): DeletePostType => ({
    type: DELETE_POST,
    postId
})

type SetPhotoSuccess = {
    type: typeof SET_PHOTO_SUCCESS
    photos: PhotosType
}

export let setPhotoSuccess = (photos:PhotosType): SetPhotoSuccess => ({
    type: SET_PHOTO_SUCCESS,
    photos
})

export const profileThunk = (userId: number) => async (dispatch:any) => {
    let data = await usersAPI.profile(userId)
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;