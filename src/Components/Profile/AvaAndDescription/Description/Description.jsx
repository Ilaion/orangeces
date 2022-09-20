import React from "react";
import mod from './Description.module.css'
import Preloader from "../../../Preloader/Preloader";

const Description = (props) => {

    return(
        <span>
            {props.profileData.contacts.vk}
        </span>
    )
}

export default Description;