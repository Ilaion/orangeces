import React from "react";
import mod from './Friend.module.css';
import defaultOnline from './../../../../../Images/default_online_friend_image.png';

const Friend = (props) => {
    return (
        <div>
            <div className={mod.online}>
                <img src={defaultOnline}/>
            </div>
            <div className={mod.name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friend;