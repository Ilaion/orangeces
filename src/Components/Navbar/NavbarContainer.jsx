import React from 'react';
import mod from './Navbar.module.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        friendsOnline: state.friend.online,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;