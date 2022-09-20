import React from "react";
import mod from './Friends.module.css';
import {NavLink} from "react-router-dom";
import FriendOnline from "./FriendsOnline/FriendOnline";

const Friends = (props) => {
    return (
        <div className={mod.friend}>
            <NavLink to='/friends'
                     className={navFriend => navFriend.isActive ? mod.activeLink : mod.friend}>Friends</NavLink>
            <div className={mod.friendOnline}>
                <FriendOnline friendsOnline={props.friendsOnline}/>
            </div>
        </div>
    )
}

export default Friends;