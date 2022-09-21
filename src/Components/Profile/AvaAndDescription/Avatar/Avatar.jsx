import React from "react";
import mod from './Avatar.module.css';
import avatar from "../../../../Images/defaulAvatar.jpg";
import changeAvaLogo from "../../../../Images/def_import_image.png"

const Avatar = (props) => {

    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={mod.ava}>
            <img src={props.profileData.photos.small != null ? props.profileData.photos.small : avatar}/>
            {!props.profileId &&
                <div>
                    <input type="file" name="file" id="file" onChange={onPhotoSelected} className={mod.btnDownload}/>
                    <label for="file">
                        <img src={changeAvaLogo}/>
                    </label>
                </div>}
        </div>
    )
}

export default Avatar;