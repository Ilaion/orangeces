import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const dialogReducer = (state = initialState, action) => {
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

export let follow = (userId) => ({
    type: FOLLOW,
    id: userId
})

export let unfollow = (userId) => ({
    type: UNFOLLOW,
    id: userId
})

export let setUsers = (users) => ({
    type: SET_USERS,
    users: users
})
export let setPageNumber = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export let setTotalUserCount = (totalUsers) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsers: totalUsers
})
export let changeFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching: isFetching
})
export let toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
})

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(changeFetching(true));
    dispatch(setPageNumber(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(changeFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUserCount(data.totalCount));
}

export const unfollowthunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const followthunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export default dialogReducer;