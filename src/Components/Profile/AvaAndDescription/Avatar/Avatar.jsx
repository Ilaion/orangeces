import React from "react";
import mod from './Avatar.module.css';
import Preloader from "../../../Preloader/Preloader";
import avatar from "../../../../Images/defaulAvatar.jpg";

const Avatar = (props) => {
    return (
        <div className={mod.ava}>
            <img src={props.profileData.photos.small != null ? props.profileData.photos.small : avatar}/>
        </div>
    )
}

export default Avatar;