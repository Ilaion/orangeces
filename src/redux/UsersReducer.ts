import {usersAPI} from "../api/api";
import { UsersType} from "../types/type";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: []as Array<UsersType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

type InitialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUsers
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }
        default:
            return state;
    }
}

type FollowType = {
    type: typeof FOLLOW
    id: number
}

export let follow = (userId:number): FollowType => ({
    type: FOLLOW,
    id: userId
})

type UnfollowType = {
    type: typeof UNFOLLOW
    id: number
}

export let unfollow = (userId:number): UnfollowType => ({
    type: UNFOLLOW,
    id: userId
})

type SetUsersType = {
    type: typeof SET_USERS
    users: any
}

export let setUsers = (users: Array<UsersType>): SetUsersType => ({
    type: SET_USERS,
    users: users
})

type SetPageNumber = {
    type: typeof  SET_CURRENT_PAGE
    currentPage: number
}

export let setPageNumber = (currentPage:number): SetPageNumber => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type SetTotalUserCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsers: number
}

export let setTotalUserCount = (totalUsers:number): SetTotalUserCount => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsers: totalUsers
})

type ChangeFetchingType = {
    type: typeof IS_FETCHING
    isFetching: boolean
}

export let changeFetching = (isFetching: boolean): ChangeFetchingType => ({
    type: IS_FETCHING,
    isFetching: isFetching
})

type ToggleFollowingProgress ={
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export let toggleFollowingProgress = (isFetching: boolean, userId:number): ToggleFollowingProgress => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

export const getUsersThunk = (currentPage: number, pageSize: number) => async (dispatch:any) => {
    dispatch(changeFetching(true));
    dispatch(setPageNumber(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changeFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
}

export const unfollowthunk = (userId:number) => async (dispatch:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const followthunk = (userId:number) => async (dispatch:any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export default dialogReducer;