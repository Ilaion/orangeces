import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, updateText} from "../../../redux/profileReducer.ts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {


    return{
        post: state.profile.post,
        newPostText: state.profile.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts);

export default MyPostsContainer;