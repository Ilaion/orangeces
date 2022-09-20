import React from 'react';
import mod from './Navbar.module.css';
import Navbar from "./Navbar";
import {connect} from "react-redux";

/*
const NavbarContainer = (props) => {
    let state = props.store.getState();

    return (
        <Navbar friendsOnline={state.friend.online}/>
    )
}
*/

let mapStateToProps = (state) => {
    return {
        friendsOnline: state.friend.online
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;