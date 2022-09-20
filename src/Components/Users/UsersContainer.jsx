import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow, toggleFollowingProgress, getUsersThunk, unfollowthunk, followthunk
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {
    takeCurrentPage,
    takeFollowingInProgress,
    takeIsFetching,
    takePageSize,
    takeTotalUserCount,
    takeUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {

        const {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {

        const {pageSize} = this.props
        this.props.getUsersThunk(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   unfollowthunk={this.props.unfollowthunk}
                   followthunk={this.props.followthunk}

            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: takeUsers(state),
        pageSize: takePageSize(state),
        totalUserCount: takeTotalUserCount(state),
        currentPage: takeCurrentPage(state),
        isFetching: takeIsFetching(state),
        followingInProgress: takeFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsersThunk,
    unfollowthunk,
    followthunk
})(UsersContainer);