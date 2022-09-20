export const takeUsers = (state) => {
    return state.users.users
}
export const takePageSize = (state) => {
    return state.users.pageSize
}

export const takeTotalUserCount = (state) => {
    return state.users.totalUserCount
}

export const takeCurrentPage = (state) => {
    return state.users.currentPage
}

export const takeIsFetching = (state) => {
    return state.users.isFetching
}

export const takeFollowingInProgress = (state) => {
    return state.users.followingInProgress
}