import React from "react";
import mod from './Dialog.module.css'
import {NavLink} from "react-router-dom";
import defaultAva from '../../../Images/default_ava.png';


const Dialog = (props) => {
    return (
        <div className={mod.dialog}>
            <div>
                <img src={defaultAva} alt="default avatar" className={mod.avatar}/>
            </div>
            <div className={mod.personal}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;