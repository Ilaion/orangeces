import React from "react";
import mod from './FriendOnline.module.css';
import Friend from "./Friend/Fiend";

const FriendOnline = (props) => {
    const frindsElement = props.friendsOnline.map(f => <Friend name={f.name} id={f.id} key={f.id}/>)
    return (
        <div className={mod.friends}>
            {frindsElement}
        </div>
    )
}

export default FriendOnline;