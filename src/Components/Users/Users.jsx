import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User/User";
import mod from "./Users.module.css"

let Users = (props) => {

    return (
        <div>
            <Paginator  totalUserCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
            <div className={mod.allUsers}>
            {
                props.users.map(u => <User user={u}  key={u.id} unfollowthunk={props.unfollowthunk} followthunk={props.followthunk}
                                           followingInProgress={props.followingInProgress}/>)
            }
            </div>
        </div>
    )
}

export default Users;