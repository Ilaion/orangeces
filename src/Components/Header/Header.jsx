import React from "react";
import logo from './../../Images/orange_icon.png';
import mod from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={mod.header}>
            <img src={logo}/>
            <span className={mod.loginBlock}>
                {props.isAuth
                    ? <span>{props.login}  <button className={mod.logout} onClick={props.logoutThunk}>Log out</button></span>
                    :<NavLink to={'/login'}>
                    log in
                </NavLink>}
            </span>
        </header>
    )
}

export default Header;