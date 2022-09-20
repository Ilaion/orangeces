import React, {useEffect, useState} from "react";
import mod from "./ProfileStatus.module.css"
import Description from "../Description/Description";


const ProfileStatusHooks = (props) => {
    let [editMode, toggleEditMode] = useState(false)
    let [status, changeStatus] = useState(props.status)

    useEffect(() => {
        changeStatus(props.status);
    }, [props.status])

    let activateEditMode = () => {
        if (props.profileId == props.me || props.profileId == undefined){
        toggleEditMode(true)}
    }
    let deactivateEditMode = () => {
        toggleEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        changeStatus(e.currentTarget.value)
    }


    return (
        <div className={mod.status}>
            <div className={mod.profileName}>{props.fullName}</div>
            {!editMode &&
                <div className={mod.statusstring}>
                    <span onDoubleClick={activateEditMode}>{props.status || "Empty status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input type="text" autoFocus onBlur={deactivateEditMode} value={status}
                           onChange={onStatusChange}
                    />
                </div>
            }
            {props.profileId == props.me || props.profileId == undefined &&
                <span className={mod.label}>change status</span>}
            <Description profileData={props.profileData}/>
        </div>
    )
}

export default ProfileStatusHooks;