import React from 'react';
import mod from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={mod.navbar}>
            <div className={mod.items}>
                <div className={mod.item}>
                    <a href='/profile'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>Profile</a>
                </div>
                <div className={mod.item}>
                    <NavLink to='/dialogs/'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>Messages</NavLink>
                </div>
                <div className={mod.item}>
                    <NavLink to='/news'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>News</NavLink>
                </div>
                <div className={mod.item}>
                    <NavLink to='/music'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>Music</NavLink>
                </div>
                <div className={mod.item}>
                    <NavLink to='/users'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>Users</NavLink>
                </div>
                <br/>
                <div className={mod.item}>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? mod.activeLink : mod.item}>Settings</NavLink>
                </div>
                <br/>
                <br/>
                <Friends friendsOnline={props.friendsOnline}/>
            </div>
        </nav>
    )
}

export default Navbar;