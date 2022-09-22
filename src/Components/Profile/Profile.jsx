import React from "react";
import mod from './Profile.module.css';
import DefaultProfileBackground from "./../../defaultThings/defaultProfileBackground/defaultProfileBackground";
import AvaAndDescription from "./AvaAndDescription/AvaAndDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";


const Profile = (props) => {
    if (!props.profileData){
        return <Preloader/>
    }
    return (
        <div className={mod.profile}>
            <DefaultProfileBackground/>
            <AvaAndDescription profileData={props.profileData} status={props.status} updateUserStatus={props.updateUserStatus}
                               profileId={props.profileId} me={props.me} myName={props.myName}
                               fullName={props.profileData.fullName} savePhoto={props.savePhoto}/>
            {props.profileId == props.me || props.profileId == undefined &&
            <MyPostsContainer />}
        </div>
    )
}

export default Profile;