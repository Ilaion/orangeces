import React from "react";
import mod from './AvaAndDescription.module.css';
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const AvaAndDescription = (props) => {
    return (
        <div className={mod.avaAndDescription}>
            <Avatar profileData={props.profileData}/>
            <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}
                                profileId={props.profileId} me={props.me} myName={props.myName}
                                fullName={props.fullName} profileData={props.profileData}/>
        </div>
    )
}

export default AvaAndDescription;