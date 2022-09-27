import React from "react";
import mod from "./../Users.module.css";
import avatar from "../../../Images/defaulAvatar.jpg";
import {NavLink} from "react-router-dom";

let User = (props) => {

    return (
        <div className={mod.users}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + props.user.id}>
                                <img src={props.user.photos.small != null ? props.user.photos.small : avatar}
                                     className={mod.avatar}/>
                            </NavLink>
                        </div>
                        <div className={mod.btn}>
                            {props.user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                        onClick={() => {
                                            props.unfollowthunk(props.user.id)
                                        }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.followthunk(props.user.id)
                                          }}>Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{props.user.name}</div>
                            <div>{props.user.status}</div>
                        </span>
                    </span>
        </div>

    )
}

export default User;